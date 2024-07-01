import Intro from "./Components/Intro";
import ReactDOM from "react-dom";
import Navbar from "./Components/Navbar";
import React, { Children, useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import darkBackground from "./images/bg-dark.jpg"
import lightBackground from './images/bg.jpg';
import moonImage from "./images/dark.png"
import sunImage from "./images/light.png"
import About from "./Components/About";
import Resume from "./Components/Resume";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { Outlet } from "react-router-dom";
import Loader from "./Components/Loader"
import Popup from "./Components/Popup";

const App =()=>{

  const [theme,setTheme] = useState("light");
  const [themeText,setThemeText] = useState("Dark");
  const [themeIcon, setThemeIcon] = useState(moonImage); // Default icon
  const [backgroundImage, setBackgroundImage] = useState('');
  const [loader, setLoader] = useState(true)
  const [isPopupOpen,setIsPopupOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("/");

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  useEffect(()=>{
    if (theme==="dark"){
      document.documentElement.classList.add("dark");
      setThemeText("Light")
      setBackgroundImage(`url(${darkBackground})`);
      setThemeIcon(moonImage);
    }
    else{
      document.documentElement.classList.remove("dark");
      setThemeText("Dark")
      setBackgroundImage(`url(${lightBackground})`);
      setThemeIcon(sunImage);
    }

  },[theme]
  )

  const handleThemeSwitch = ()=>{
    setTheme(theme==="dark" ? "light" : "dark")
  }

 const openPopup = ()=>{
    setIsPopupOpen(true)
 }
 const closePopup = ()=>{
  setIsPopupOpen(false);
 }

  

  return (
    <div className="min-h-screen dark:bg-homeBg-dark bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full" style={{ backgroundImage: backgroundImage }}>
      {
        loader ? (
          <Loader/>
        ) : 
        (
          <>
          <Navbar handleThemeSwitch={handleThemeSwitch} themeIcon={themeIcon} themeText={themeText} openPopup={openPopup}  
          activeMenu={activeMenu} setActiveMenu={setActiveMenu}/>
          <Outlet/>
          {
            isPopupOpen && <Popup onClose={closePopup}/>
          }
          </>
        )
      }
      
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/Portfolio",
    element: <App />,
    children: [
      {
        path: "/Portfolio",
        element: <Intro />
      },
      {
        path: "/Portfolio/about",
        element: <About />
      },
      {
        path: "/Portfolio/resume",
        element: <Resume />
      },
      {
        path: "/Portfolio/works",
        element: <Works />
      },
      {
        path: "/Portfolio/contact",
        element: <Contact />
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <RouterProvider router={appRouter}/>
)
