import React from 'react';
import { Link } from 'react-router-dom';
import './styles/HeaderFooter.css'; 

const Header = () => {
  return (
    <header className="header">
      {/* <h1>My Drink App</h1> */}
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
