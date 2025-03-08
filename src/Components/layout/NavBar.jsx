import React from 'react'

const NavBar = () => {
  return (
    <header className="py-6 px-4 lg:px-0 border-b border-bg-secondary-100">
      <nav className="wrapper flex items-center justify-between">
      
        <div>
          <h1 className="text-2xl leading-[36px] font-medium">
            <span className="text-primary-100">Stay</span>cation.
          </h1>
        </div>

     
        <div className="hidden lg:block">
          <menu className="flex space-x-8">
            <a href="?">
              <li className="text-primary-100">Home</li>
            </a>
            <a href="?">
              <li>Brouse by</li>
            </a>
            <a href="?">
              <li>Stories</li>
            </a>
            <a href="?">
              <li>Agents</li>
            </a>
          </menu>
        </div>

        <i className="fa-solid fa-bars text-3xl  lg:hidden"></i>
      </nav>
    </header>
  )
}

export default NavBar
