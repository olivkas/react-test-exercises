import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='primaryHeader'>
      <div className='wr_content'>
        <Link to='/'>Main</Link>
        <Link to='/employees'>Employees</Link>
      </div>
    </div>
  );
};

export default Header;
