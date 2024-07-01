import React from 'react'

const EducationBox = ({education}) => {
  return (
    <>
        <div className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg bg-pink-100 dark:border-[#212425] dark:border-2 dark:bg-[#212425]">
            <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">{education.education.year}</span>
            <h3 className="text-xl dark:text-white"> {education.education.degree} in {education.education.branch}  </h3>
            <p className="dark:text-[#b7b7b7]">{education.placeName}</p>
        </div>
    </>
  )
}

export default EducationBox