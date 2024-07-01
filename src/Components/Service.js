import React from 'react'
import { services } from '../utils/data'

const Service = (props) => {
  return (
    <div  className="about-box p-5 bg-pink-100 rounded-lg dark:bg-transparent dark:bg-[#212425]">
        <img alt="icon" src={props.icon} width="40" height="40" className="w-10 h-10 object-contain block" />
        <div className="space-y-2 break-all">
            <h3 className="dark:text-white text-xl mt-2 font-semibold">{props.title}</h3>
            <p className=" leading-8 text-gray-lite dark:text-[#A6A6A6]">{props.description}</p>
        </div>
    </div>
  )
}

export const withPramotedService=(Service)=>{
    return(props)=>{
        return(
            <div className="relative">
            <p className="absolute right-0 bg-pink-900 p-1 text-white">Pramoted</p>
            <Service {...props}/>
            </div>
        )
    }
}

export default Service