import React from 'react';

function Header(props) {
  return (
    <div>
      <header>
        <h1>To Do List: {props.incomplete} items pending</h1>
      </header>
    </div>
  );
}

export default Header;
