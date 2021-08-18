import React, {useState, useEffect, useContext} from 'react';
import { Button, InputGroup } from '@blueprintjs/core';

import { ListContext } from '../../context/settings/context';
function SettingsForm(props) {
  const settings = useContext(ListContext);
  const [items, setItems] = useState(settings.itemsPerPage);

  const handleItems = (event) => {
    event.preventDefault();
    settings.setItemsPerPage(Number(event.target.items.value));
    localStorage.setItem('savedItemsPerPage', Number(event.target.items.value));
  };

  const handleItemsChange = (event) => {
    event.preventDefault();
    setItems(event.target.value);
  };

  useEffect(() => {
    const SavedItems = localStorage.getItem('savedItemsPerPage');
    if(SavedItems) settings.setItemsPerPage(Number(SavedItems));
  },[settings]);

  return (
    <div className = 'left'>
      <form onSubmit = {handleItems}>
        <label>
          <p>Items per page</p>
          <InputGroup className = 'input' onChange = {handleItemsChange} type="text" value = {items} name = 'items'/>
        </label>
        <Button type = 'submit'>Change</Button>
      </form>
    </div>
  );
}

export default SettingsForm;
