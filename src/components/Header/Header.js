
import './Header.css';
import React, { Component } from 'react'
import CartWidget from './CartWidget/CartWidget';

class Header extends Component {
  render() {
    return (
      <nav>
        <ul>
          <a>
            {" "}
            <li> Home </li>
          </a>
          <a>
            <li>Products</li>
          </a>
          <a>
            <li>Contact Us</li>{" "}
          </a>
          < CartWidget />
        </ul>
        
      </nav>

    );
  }
}

export default Header;
