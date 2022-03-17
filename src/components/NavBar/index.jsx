import React from 'react';
import { NavLink } from 'react-router-dom';
import { HOME_ROUTE, CREATE_ROUTE, UPDATE_ROUTE, DELETE_ROUTE } from '../Constants/Routes';

function NavBar() {
  return(
    <nav>
      <NavLink to={HOME_ROUTE}>Home</NavLink>
      <NavLink to={CREATE_ROUTE}>Create</NavLink>
      <NavLink to={UPDATE_ROUTE}>Update</NavLink>
      <NavLink to={DELETE_ROUTE}>Delete</NavLink>
    </nav>
  )
}

export default NavBar;
