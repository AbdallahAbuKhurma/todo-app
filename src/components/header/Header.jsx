import React from 'react';
import './header.scss';

function Header() {
  return (
    <div className = 'body'>
      <nav className="nav">
        <div className="container">
          <h1 className="logo"><a href="/index.html">TODO List Manager</a></h1>
          <ul>
            <li><a href="/" className="current">HOME</a></li>
            <li><a href="/login">LOGIN</a></li>
            <li><a href="/about">ABOUT</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
