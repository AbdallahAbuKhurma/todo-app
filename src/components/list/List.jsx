import React, { useState, useContext, useEffect } from 'react';
import { ListContext } from '../../context/settings/context';
import uuid from 'react-uuid';
import './list.scss';

function List(props) {
  const { list, toggleComplete } = useContext(ListContext);
  const [startingIndex, setStartingIndex] = useState(0);
  const [itemPerPages, setItemPerPages] = useState(3);
  const [filter, setFilter] = useState([]);

  function nextOrPre(num) {
    if(startingIndex + num < 0){
      return;
    }
    setStartingIndex(startingIndex + num);
    setItemPerPages(itemPerPages + num);
  }

  function showIncomplete() {
    if (filter === list)
      setFilter(() => filter.filter((item) => item.complete !== true));
    else setFilter(list);
  }

  useEffect(() => {
    setFilter(list);
  }, [list]);

  const listOfTodos = filter.slice(startingIndex, itemPerPages).map((item) =>{
    const difficulty = item.difficulty;
    if(item.difficulty > 3){
      item.difficulty = 'Hard';
    } else if(item.difficulty < 3) {
      item.difficulty = 'Easy';
    } else {
      item.difficulty = 'Medium';
    }
    return(
      <div className = 'list' key={uuid()}>
        <p style = {{fontWeight: 'bold'}}>{item.text}</p>
        <p>
          <small>Assigned to: {item.assignee}</small>
        </p>
        <p>
          <small>Difficulty: {difficulty}</small>
        </p>
        <p>
          <small onClick={() => toggleComplete(item.id)}>
            Complete: {item.complete.toString()}
          </small>
        </p>
        <hr />
      </div>
    );
  });

  return (
    <div className = 'split right'>
      <header className = 'header'>
        <h1>To Do List: {props.incomplete} items pending</h1>
      </header>
      <button className = 'incomplete' onClick={showIncomplete}>
        Hide completed {filter === list ? 'off' : 'on'}
      </button>
      <ul>
        {listOfTodos}
      </ul>
      <div>
        <button className = 'usual-button' onClick = {() => nextOrPre(-3)}>Previous</button>
        <button className = 'usual-button' onClick = {() => nextOrPre(3)}>Next</button>
      </div>
    </div>
  );
}

export default List;
