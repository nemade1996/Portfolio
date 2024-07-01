import React from 'react'
import Title from './Title'
import email from "../images/email.png"
import phone from "../images/phone.png"
import location from "../images/location.png"
import { Link } from 'react-router-dom'
import ContactForm from './ContactForm'

const Contact = () => {

  const contactInfo = {
    phone: "+91 8412807179",
    email: "neha1996nemade@gmail.com",
    address: "Mumbai, India"
  };

  return (
    <>
      <div className='container lg:rounded-2xl bg-white dark:bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20'>
        <div className='py-12'>
          <Title name="Contact"/>
        </div>
        <div className='lg:flex gap-x-20'>
          <div className="w-full lg:w-[40%] xl:w-[30%] space-y-6 pb-20">
            <div className="flex flex-wrap p-[30px] bg-pink-100 border-[#A6A6A6] gap-2 rounded-xl dark:bg-[#212425]">
              <span className="w-8 mt-2"><img src={phone} alt="icon"  className="text-4xl dark:text-white"/></span>
              <div className="space-y-2">
                <p className="text-xl font-semibold dark:text-white">Phone  :</p>
                <p><Link to={`tel:${contactInfo.phone}`} className="text-gray-lite text-lg dark:text-[#A6A6A6] ">{contactInfo.phone}</Link></p>
              </div>
            </div>
            <div className="flex flex-wrap p-[30px] bg-pink-100 border-[#A6A6A6] gap-2 rounded-xl dark:bg-[#212425]">
              <span className="w-8 mt-2"><img src={email} alt="icon" className="text-4xl dark:text-white"/></span>
              <div className="space-y-2">
                <p className="text-xl font-semibold dark:text-white">Email  :</p>
                <p><Link to={`mailto:${contactInfo.email}`} className="text-gray-lite text-lg dark:text-[#A6A6A6] ">{contactInfo.email}</Link></p>
              </div>
            </div>
            <div className="flex flex-wrap p-[30px] bg-pink-100 border-[#A6A6A6] gap-2 rounded-xl dark:bg-[#212425]">
              <span className="w-8 mt-2"><img src={location} alt="icon"  className="text-4xl dark:text-white"/></span>
              <div className="space-y-2">
                <p className="text-xl font-semibold dark:text-white">Address  : </p>
                <p className="text-gray-lite text-lg dark:text-[#A6A6A6] "> {contactInfo.address}</p>
              </div>
            </div>
          </div>
          <div className="w-full mt-8 lg:mt-0 lg:w-[60%] xl:w-[70%]">
            <div className="  dark:border-[#212425]  p-4   bg-color-810 rounded-xl dark:bg-[#111111] mb-[30px] md:mb-[60px]">
              <h3 className="text-4xl ">
                <span className="text-gray-lite dark:text-[#A6A6A6] ">I'm always open to discussing product</span>
                <br/>
                <span className="font-semibold dark:text-white">design work or partnerships.</span>
              </h3>
              <ContactForm/>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contact