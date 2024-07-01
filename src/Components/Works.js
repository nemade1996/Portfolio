import React from 'react'
import Title from './Title'
// import w1 from "../images/w1.jpg"
import { useState } from 'react'
import { portfolioItems } from '../utils/data'
import { Link } from 'react-router-dom'

const Works = () => {

  const [selectedCategory, setSelectedCategory] = useState('All');
  console.log(selectedCategory)

  const categories = ['All', 'Wordpress', 'HTML'];

  const filteredItems = selectedCategory == "All" ? portfolioItems : portfolioItems.filter(item => item.category === selectedCategory)


  return (
    <div>
      <div className='container lg:rounded-2xl bg-white dark:bg-[#111111] px-4 sm:px-5 md:px-10 lg:px-20'>
        <div className='py-12'>
          <Title name="Portfolio"/>
        </div>
        <ul className="flex w-full justify-start md:justify-end flex-wrap font-medium pb-12">
          {
            categories.map((category)=>(
              <button key={category} onClick={()=>{setSelectedCategory(category)}} className={`filter-btn mr-2 md:mx-2 ${selectedCategory === category ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'}`}>{category}</button>
            ))
          }

        </ul>
        <div className="my-masonry-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8  pb-20">
          {
            filteredItems.map((portfolioItem)=>(
              <div className="my-masonry-grid_column dark:bg-[#212425] bg-pink-100 mb-2 ">
                <div className="rounded-lg p-6 dark:bg-[#212425] border-[#212425]">
                  <div className="overflow-hidden rounded-lg">
                    <img alt="portfolio Image" src={portfolioItem.imgSrc} width="300" height="300" className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto " />
                  </div>
                  <span className="font-bold pt-5 text-[24px] text-gray-lite block dark:text-[#A6A6A6]">{portfolioItem.title}</span>
                  <h2 className="text-pink-600 font-medium cursor-pointer text-lg transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mb-2">{portfolioItem.category}</h2>
                  <Link to={portfolioItem.link} target='_blank' className='text-gray-700 font-medium cursor-pointer text-md duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2'>Visit Now</Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Works