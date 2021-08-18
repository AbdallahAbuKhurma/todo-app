import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import useForm from '../../hooks/form';
import Form from './Form';
import Header from './Header';
import List from './List';
import SettingsForm from './SettingsForm';
import '../styles.scss';

const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    const data = {
      id: uuid(),
      text: item.text,
      assignee: item.assignee,
      difficulty: item.difficulty,
      complete: false,
    };
    console.log(data);
    setList([...list, data]);
  }

  // function deleteItem(id) {
  //   const items = list.filter( item => item.id !== id );
  //   setList(items);
  // }

  function toggleComplete(id) {
    const items = list.map( item => {
      if ( item.id === id ) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [incomplete, list]);

  return (
    <>
      <Header incomplete = {incomplete}/>
      <SettingsForm/>
      <Form className = 'split' handleChange = {handleChange} handleSubmit = {handleSubmit} />
      <List className = 'split' toggleComplete = {toggleComplete} list = {list}/>
    </>
  );
};

export default ToDo;
