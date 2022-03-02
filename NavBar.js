import React from 'react';
import CartWidget from './CartWidget';
import '../styles/menu-nav.css';

const NavBar = () => {
  return (
    <nav className='main-nav'>
      <div className='menu-logo'>@elfotorama</div>
      <div className='menu-elements'>
        <ul>
            <li><a href="#">🏠 Home</a></li>
            <li><a href="#">🛒 Productos</a></li>
            <li><a href="#">✉️ Contacto</a></li>
        </ul>
      </div>
      <div className='menu-cart'>
        <CartWidget/>
      </div>
    </nav>
    
  )
}

export default NavBar