import React, { useContext } from 'react';
import { Button, InputGroup } from '@blueprintjs/core';

import { ListContext } from '../../context/settings/context';
function SettingsForm(props) {
  const settings = useContext(ListContext);

  return (
    <div className = 'left'>
      <form onSubmit = {settings.handleItems}>
        <label>
          <p>Items per page</p>
          <InputGroup className = 'input' onChange = {settings.handleItemsChange} type="text" value = {settings.items} name = 'items'/>
        </label>
        <Button type = 'submit'>Change</Button>
      </form>
    </div>
  );
}

export default SettingsForm;
