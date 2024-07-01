import React from 'react'

const Skills = () => {
    const labels = ['Web Design', 'User Interface', 'Graphic Design', 'Frontend Development'];
    const widths = ['80%', '60%', '40%', '20%'];
    const knowledges = [
        "HTML",
    "CSS",
    "JavaScript",
    "ReactJS",
    "GitHub",
    "Redux",
    "Responsive Design",
    "CSS Frameworks",
    "JavaScript Frameworks/Libraries",
    "Version Control/Git",
    "Browser Developer Tools",
    "Frontend Build Tools",
    "Cross-browser Compatibility",
    "Web Performance Optimization",
    "Accessibility",
    "SEO Best Practices",
    "UX/UI Design Principles",
    "Problem-solving and Debugging"
      ];

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-6 mt-8 pb-20'>
    <div>
        {widths.map((width, index) => (
            <>
            <div class="flex justify-between py-1">
                <span class=" text-base text-gray-lite font-semibold dark:text-[#A6A6A6]">{labels[index]}</span>
                <span class=" text-base font-semibold text-gray-lite pr-5 dark:text-[#A6A6A6]">{width}</span>
            </div>
            <div>
                <div className='completed-bar bg-red h-5 block border-2 border-solid border-black relative'>
                    <div className='fullfilled' style={{ width }}></div>
                </div>
            </div>
            </>
        ))}
    </div>
    <div>
        <ul className='flex gap-x-3 gap-y-3 md:gap-y-3 md:gap-x-3 flex-wrap'>
            {
                knowledges.map((knowledge)=>(
                    <li className='resume-btn text-[15px] dark:bg-[#212425] dark:text-white'>{knowledge}</li>
                ))
            }
        </ul>
    </div>
    </div>
  )
}

export default Skills