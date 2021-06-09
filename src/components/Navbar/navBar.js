import React from 'react';
import './navBar.css';

function NavBar() {
    return ( 
        <div className='NavBar'>
          <ul>
            <a> <li> Home </li></a>
            <a><li>Products</li></a>
            <a><li>Contact Us</li> </a>
          </ul>
        </div>

    );
}

export default NavBar;
