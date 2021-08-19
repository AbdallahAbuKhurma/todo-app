import React, { useState, useEffect } from 'react';
export const ListContext = React.createContext();

function ListSettings(props) {
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [showComplete, setShowComplete] = useState(true);
  const [items, setItems] = useState((localStorage.key('savedItemsPerPage')? localStorage.getItem('savedItemsPerPage'): itemsPerPage));

  const handleItems = (event) => {
    event.preventDefault();
    setItemsPerPage(Number(event.target.items.value));
    localStorage.setItem('savedItemsPerPage', Number(event.target.items.value));
  };

  const handleItemsChange = (event) => {
    event.preventDefault();
    setItems(event.target.value);
  };

  useEffect(() => {
    const SavedItems = localStorage.getItem('savedItemsPerPage');
    if(SavedItems) setItemsPerPage(Number(SavedItems));
  }, []);

  const states = {
    items,
    itemsPerPage,
    showComplete,
    setItems,
    setItemsPerPage,
    setShowComplete,
    handleItems,
    handleItemsChange,
  };

  return (
    <ListContext.Provider value = {states}>
      {props.children}
    </ListContext.Provider>
  );
}

export default ListSettings;
