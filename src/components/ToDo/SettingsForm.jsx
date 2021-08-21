import React, { useContext } from 'react';
import { Button, InputGroup } from '@blueprintjs/core';
import Auth from '../../context/auth/auth';

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
        <Auth capability = 'delete'>
          <Button style = {{marginLeft: '1.25rem'}} type = 'submit'>Change</Button>
        </Auth>
      </form>
    </div>
  );
}

export default SettingsForm;
