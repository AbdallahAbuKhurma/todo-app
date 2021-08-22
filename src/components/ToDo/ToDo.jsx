import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import superagent from 'superagent';
import cookie from 'react-cookies';
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
  const API = 'https://api-js401.herokuapp.com/api/v1/todo';

  async function getData(){
    const response = await superagent.get(API);
    setList(response.body.results);
    console.log(response.body.results);
  }

  useEffect(() => {
    getData();
  },[]);

  async function addItem(item) {
    try {
      const data = {
        id: uuid(),
        text: item.text,
        assignee: item.assignee,
        difficulty: item.difficulty,
        complete: false,
      };
      const response = await superagent.post(API, data);
      setList([...list, response]);
    } catch (error) {
      console.error('ADD Error', error);
    }
  }

  async function deleteItem(id) {
    try {
      const token = cookie.load('auth');
      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      let response = await superagent.delete(`${API}/${id}`, config);
      response = list.filter( item => item._id !== id );
      setList(response);
    } catch (error) {
      console.error('Delete Error', error);
    }
  }

  async function toggleComplete(id) {
    try {
      let itemNeedUpdate;
      const items = list.map( item => {
        if( item._id === id ) {
          item.complete = !item.complete;
          itemNeedUpdate = item;
        }
        return item;
      });
      await superagent.put(`${API}/${id}`, itemNeedUpdate);
      setList(items);
    } catch (error) {
      console.error('Put Error', error);
    }
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
      <List className = 'split' deleteItem = {deleteItem} toggleComplete = {toggleComplete} list = {list}/>
    </>
  );
};

export default ToDo;
