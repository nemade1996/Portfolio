import React from 'react'
import Title from './Title'
import aboutimg from "../images/about.jpg"
import {personalInfo} from "../utils/data"
import { Link } from 'react-router-dom'
import phone from "../images/phone.svg"
import birthday from "../images/birthday.svg"
import email from "../images/email.svg"
import location from "../images/location.svg"
import { services } from '../utils/data'
import Service, {withPramotedService} from './Service'

const About = () => {
  const ServicePramoted  = withPramotedService(Service);

  return (
    <div className='container lg:rounded-2xl bg-white dark:bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20'>
      <div className='py-12'>
        <Title name="About Us"/>
      </div>
      <div className='grid grid-cols-12 md:gap-10 items-center'>
        <div className='col-span-12 md:col-span-4'>
          <img src={aboutimg} />
        </div>
        <div className='col-span-12 md:col-span-8 space-y-2.5'>
          <div className='md:mr-12 xl:mr-16'>
          <h3 className="text-4xl font-medium dark:text-white mb-2.5">Who am i?</h3>
          <p className="text-gray-lite dark:text-color-910 dark:text-white leading-7">{personalInfo.description}</p>
          </div>
          <div>
          <h3 className="text-4xl font-medium my-5 dark:text-white">Personal Info</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex">
              <span className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex dark:bg-[#212425] items-center justify-center rounded-md text-2xl w-12 shadow-lg">
              <img src={phone} />
              </span>
              <div className="space-y-1">
                <p className="text-xs text-gray-lite dark:text-color-910">Phone</p>
                <h6 className="font-medium dark:text-white">
                    <Link className="hover:text-[#FA5252] duration-300 transition">{personalInfo.contact.phone}</Link>
                </h6>
              </div>
            </div>
            <div className="flex">
              <span className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex dark:bg-[#212425] items-center justify-center rounded-md text-2xl w-12 shadow-lg">
                <img src={email} />
              </span>
              <div className="space-y-1">
                <p className="text-xs text-gray-lite dark:text-color-910">Email</p>
                <h6 className="font-medium dark:text-white">
                    <Link className="hover:text-[#FA5252] duration-300 transition">{personalInfo.contact.email}</Link>
                </h6>
              </div>
            </div>
            <div className="flex">
              <span className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex dark:bg-[#212425] items-center justify-center rounded-md text-2xl w-12 shadow-lg">
              <img src={location} />
              </span>
              <div className="space-y-1">
                <p className="text-xs text-gray-lite dark:text-color-910">Location</p>
                <h6 className="font-medium dark:text-white">
                    <Link className="hover:text-[#FA5252] duration-300 transition">{personalInfo.contact.location}</Link>
                </h6>
              </div>
            </div>
            <div className="flex">
              <span className="text-oriange dark:bg-color-990 shadow-icon mr-2.5 flex dark:bg-[#212425] items-center justify-center rounded-md text-2xl w-12 shadow-lg">
              <img src={birthday} />
              </span>
              <div className="space-y-1">
                <p className="text-xs text-gray-lite dark:text-color-910">Birthday</p>
                <h6 className="font-medium dark:text-white">
                    <Link className="hover:text-[#FA5252] duration-300 transition">{personalInfo.contact.birthday}</Link>
                </h6>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div className="pb-12 ">
        <h3 className="text-[35px] dark:text-white font-medium pb-5 mt-8">What I do!</h3>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 ">
          {
            services.map((service,index)=>(
              service.parmoted ? <ServicePramoted key={index} icon={service.icon} title={service.title} description={service.description}/> 
              : <Service key={index} icon={service.icon} title={service.title} description={service.description}/>
            ))
          }
          
        </div>
      </div>
    </div>

  )
}

export default About