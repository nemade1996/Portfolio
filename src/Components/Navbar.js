import React, { useEffect, useState } from 'react';
import logo from "../images/logo.png"
import moonImage from "../images/dark.png"
import sunImage from "../images/light.png"
import { Link } from 'react-router-dom';
import quote from "../images/text.png"


const Navbar = ({ handleThemeSwitch, themeText, themeIcon, openPopup ,setActiveMenu, activeMenu }) => {  

  const menuItems = [
    { path: "/Portfolio/", label: "Home" },
    { path: "/Portfolio/about", label: "About" },
    { path: "/Portfolio/resume", label: "Resume" },
    { path: "/Portfolio/works", label: "Works" },
    { path: "/Portfolio/contact", label: "Contact" },
  ];

  return (
    <div className='z-50 '>
      <div className="container">
        <header className="flex justify-between items-center fixed top-0 left-0 w-full lg:static z-[1111111111] ">
          <div className=" flex justify-between w-full px-4 lg:px-0 bg-[#F3F6F6] lg:bg-transparent lg:dark:bg-transparent dark:bg-black ">
            <div className="flex justify-between w-full items-center space-x-4 lg:my-8 my-5 ">
            <Link to="/Portfolio"><img src={logo} className='w-20'/></Link>
            </div>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex my-12 ">
            {menuItems.map((item) => (
                <li key={item.path} className={`mb-1 px-2 rounded-md cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out ${activeMenu === item.path ? 'text-white bg-gradient-to-r from-[#FA5252] to-[#DD2476]' : 'dark:hover:text-white dark:bg-[#212425] hover:text-white hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] dark:text-[#A6A6A6]'}`}>
                  <Link to={item.path} onClick={() => setActiveMenu(item.path)}>{item.label}</Link>
                </li>
              ))}
              <button className="flex mb-1 px-2 rounded-md cursor-pointer font-poppins bg-white text-gray-lite font-medium mx-2.5 flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center transition-all duration-300 ease-in-out dark:hover:text-white dark:text-white dark:bg-[#212425] hover:text-black" onClick={handleThemeSwitch}> 
                <p>{themeText}</p> 
                <img src={themeText === 'Dark' ? moonImage : sunImage} alt="Image" className="w-6 h-6 ml-2 mr-4"/>
              </button>
              <button onClick={openPopup}><img src={quote} className="w-[30] h-[30] ml-2 mr-4"/></button>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  )
}

export default Navbar