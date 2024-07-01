import React from 'react';
import { portfolioData } from '../utils/data';
import avtar from "../images/avatar.jpg"
import download from "../images/download.png"
import facebook from "../images/fb.png"
import instagram from "../images/ig.png"
import linkedin from "../images/li.png"
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className='flex flex-col items-center h-[100vh] md:h-[90vh] lg:h-[80vh] xl:h-[71vh] justify-center'>
        <img alt="hero image" src={avtar} className="rounded-full w-[250px] h-[250px] 2xl:w-[280px] 2xl:h-[280px]"/>
        <h3 className="mt-6 mb-1 text-5xl font-semibold dark:text-white">{portfolioData.name}</h3>
        <p className="mb-4 text-2xl text-[#7B7B7B]">{portfolioData.designation}</p>
        <div className="flex space-x-3">
        <a href="https://www.facebook.com/" target="_blank">
            <span className="socialbtn text-[#1773EA]">
            <img src={facebook} className='w-6 h-auto'/>
            </span>
        </a>
        <a href="https://twitter.com/" target="_blank">
            <span className="socialbtn text-[#1C9CEA]">
            <img src={linkedin} className='w-6 h-auto'/>
            </span>
        </a>
        <a href="https://dribbble.com/" target="_blank">
            <span className="socialbtn text-[#e14a84]">
            <img src={instagram} className='w-6 h-auto'/>
            </span>
        </a>
        </div>
        <Link to="#" className="flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6">
            <img src={download} alt="icon" className="mr-2" />Download CV
        </Link>

    </div>
  )
}

export default Intro