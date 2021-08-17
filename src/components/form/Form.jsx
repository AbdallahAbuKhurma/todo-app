import React, {useContext} from 'react';
import { ListContext } from '../../context/settings/context';
import './form.scss';

function Form(props) {
  const {handleChange, handleSubmit} = useContext(ListContext);
  return (
    <div className = 'split left'>
      <form onSubmit={handleSubmit}>
        <label>
          <p>To Do Item</p>
          <input onChange={handleChange} name="text" type="text" placeholder="What to do?"/>
        </label>

        <label>
          <p>Assigned To</p>
          <input onChange={handleChange} name="assignee" type="text" placeholder="Assigned to?"/>
        </label>

        <label>
          <p>Difficulty</p>
          <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty"/>
        </label>

        <label>
          <button className = 'usual-button' type="submit">Add Item</button>
        </label>
      </form>
    </div>
  );
}

export default Form;
