import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Logo from "./Logo";
import Menu from "./Menu";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu((prev) => !prev)
  }
  return (
  
    <header className="py-6 px-4 lg:px-0 border-b border-bg-secondary-100">
      <nav className="wrapper flex items-center justify-between">
      <Logo/>
      <Menu menuStyle="hidden lg:flex space-x-8  capitalize items-center text-base"/>

       

       <button className="flex lg:hidden" onClick={toggleMenu}>
       <IoMdMenu fontSize={35} />
       </button>
      </nav>

      {
        openMenu && (
          <nav className="fixed inset-0 w-full h-[350px] bg-primary rounded-b-3xl text-white  p-6">
            <div className="flex items-center justify-between">
            <Logo toggleMenu={toggleMenu}/>
            <button className="" onClick={toggleMenu}>
            <IoMdClose fontSize={30} />
            </button>
            </div>

            <Menu menuStyle="flex item-center flex-col space-y-5 pt-8 capitalize"  toggleMenu={toggleMenu}/>

          </nav>
        )
      }
    </header>
  );
};

export default NavBar;
