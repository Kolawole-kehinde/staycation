import React from 'react'
import { NavLink } from 'react-router';
import { navRoutes } from '../../constant/NavRoutes';

const Menu = ({toggleMenu, menuStyle}) => {
    const active = (isActive) => {
        return isActive ? "text-orange-500" : "text-blue-500";
      };
  return (
    <>
       <menu className={menuStyle}>
            {
              navRoutes.map(({id, name, path}) => (
                <li key={id}>
                <NavLink 
                to={path}
                className={({ isActive }) => active(isActive)}
                onClick={toggleMenu}
                >
                  {name}
                </NavLink>

                </li>
              ))
            }
          </menu>
    </>
  )
}

export default Menu