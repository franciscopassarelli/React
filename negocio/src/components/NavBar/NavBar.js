import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.Modules.css";
import {NavLink, Link } from 'react-router-dom';




const NavBar = () => {
    return (
      <nav className="NavBar">
        <Link to='/'> 
        <h3>Ecommerce</h3>
        </Link> 
      <div className="Categories">
        <NavLink to={`/category/raquetas`}className={({isActive}) => isActive ? 'ActiveOpiton' : 'Option'}>raquetas</NavLink>
        <NavLink to={`/category/indumentaria`}className={({isActive}) => isActive ? 'ActiveOpiton' : 'Option'}>indumentaria</NavLink>
        <NavLink to={`/category/accesorios`}className={({isActive}) => isActive ? 'ActiveOpiton' : 'Option'}>accesorios</NavLink>
      </div>
      <CartWidget/>
      </nav>
    );
     
  };

export default NavBar