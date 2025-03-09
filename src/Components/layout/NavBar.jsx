import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Logo from "./Logo";
import Menu from "./Menu";
import { NavLink } from "react-router";
import { navRoutes } from "../../constant/NavRoutes";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev)
  }
  return (
  
    <header className="py-6 px-4 lg:px-0 border-b border-bg-secondary-100">
      <nav className="wrapper flex items-center justify-between">
      <Logo/>

        <div className="hidden lg:block">
          <menu className="flex space-x-8">
            {
              navRoutes.map(({id, name, path}) => (
                <li key={id}>
                <NavLink 
                to={path}
              >
                  {name}
                </NavLink>

                </li>
              ))
            }
          </menu>
        </div>

       <button className="flex lg:hidden" onClick={toggleMenu}>
       <IoMdMenu fontSize={35} />
       </button>
      </nav>

      {
        openMenu && (
          <nav className="fixed inset-0 w-full h-[350px] bg-primary rounded-b-3xl text-white  p-6">
            <div className="flex items-center justify-between">
            <Logo/>
            <button className="" onClick={toggleMenu}>
            <IoMdClose fontSize={30} />
            </button>
            </div>

            <Menu />

          </nav>
        )
      }
    </header>
  );
};

export default NavBar;
