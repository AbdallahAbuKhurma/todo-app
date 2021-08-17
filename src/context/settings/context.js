import React from 'react';
import { useState } from 'react';
import uuid from 'react-uuid';
export const ListContext = React.createContext();

function ListSetting(props) {
  const [list, setList] = useState([]);
  const [values, setValues] = useState({});

  function handleSubmit(event) {
    if (event) event.preventDefault();
    values.id = uuid();
    values.complete = false;
    setList([...list, values]);
    event.target.reset();
  }

  function handleChange(event) {
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value
    }));
  }

  function toggleComplete(id) {
    const items = list.map((item) => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });
    setList(items);
  }

  return (
    <ListContext.Provider value={{ list, handleChange, handleSubmit, toggleComplete }}>
      {props.children}
    </ListContext.Provider>
  );
}

export default ListSetting;
