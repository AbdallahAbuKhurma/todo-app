import React, { useEffect, useState, useContext } from 'react';
import Form from '../form/Form';
import List from '../list/List';
import { ListContext } from '../../context/settings/context';
import './todo.scss';
const ToDo = () => {
  const listObj = useContext(ListContext);
  const [incomplete, setIncomplete] = useState([]);

  // function addItem(item) {
  //   item.id = uuid();
  //   item.complete = false;
  //   setList([...list, item]);
  // }

  // function deleteItem(id) {
  //   const items = list.filter((item) => item.id !== id);
  //   setList(items);
  // }

  useEffect(() => {
    let incompleteCount = listObj.list.filter((item) => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listObj.list]);

  return (
    <>
      <Form classNAme = 'split'/>
      <List incomplete = {incomplete} classNAme = 'split'></List>
    </>
  );
};

export default ToDo;
