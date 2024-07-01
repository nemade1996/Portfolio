import React from 'react'
import Title from './Title'
import EducationBox from './EducationBox'
import ExperienceBox from './ExperienceBox'
import { educationDetails } from '../utils/data'
import { experienceDetails } from '../utils/data'
import educationImg from "../images/education.svg"
import experinceImg from "../images/experince.svg"
import Skills from './Skills'

const Resume = () => {
  console.log(experienceDetails)

  return (
    <>
      <div className='container lg:rounded-2xl bg-white dark:bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20'>
        <div className='py-12'>
          <Title name="Resume"/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 '>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-6xl text-[#F95054]">
                <img src={educationImg} className='w-10'/>
              </div>
              <h4 className="text-4xl dark:text-white font-medium">Education</h4>
            </div>
            {
              educationDetails.map((education)=>(
                <EducationBox education={education}/>
              ))
            }
          </div>
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-6xl text-[#F95054]">
                <img src={experinceImg} className='w-10'/>
              </div>
              <h4 className="text-4xl dark:text-white font-medium">Experience</h4>
            </div>
            {
              experienceDetails.map((experience)=>(
                <ExperienceBox experience={experience}/>
              ))
            }
          </div>
        </div>
        <div >
          <Skills/>
        </div>
      </div>
    </>
  )
}

export default Resume