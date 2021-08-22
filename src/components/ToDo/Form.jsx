import React from 'react';
import { Button, FormGroup, InputGroup } from '@blueprintjs/core';

function Form(props) {
  return (
    <div className = 'split left'>
      <h2>Add To Do Item</h2>
      <FormGroup
        label="To Do Item"
      >
        <InputGroup className = 'input' onChange={props.handleChange} type = 'text' name="text" placeholder="Item Details" />
      </FormGroup>
      <FormGroup
        label="Assigned To"
      >
        <InputGroup className = 'input' onChange={props.handleChange} name="assignee" type="text" placeholder="Assignee Name" />
      </FormGroup>
      <FormGroup onSubmit={props.handleSubmit}
        label="Difficulty"
      >
        <InputGroup className = 'input' onChange={props.handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty"/>
      </FormGroup>
      <Button className = 'usual bp3-intent-primary' onClick = {props.handleSubmit}>Add to list</Button>
    </div>
  );
}

export default Form;
