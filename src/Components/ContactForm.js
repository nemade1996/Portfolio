import React, { useState } from 'react'

const ContactForm = () => {
    const [name , setName] =useState(""); 
    const [email , setEmail] =useState(""); 
    const [msg , setMsg] =useState(""); 
    const [submittedData, setSubmittedData] = useState(null);

    const handleOnClick = (e)=>{
        e.preventDefault();
        
        if (!name || !email || !msg){
            alert("Fill all the fields")
        }

        const formData = { name, email, msg };

        setSubmittedData(formData)
    }

  return (
    <div>
        <form id="myForm">
            <div className="relative z-0 w-full mt-[40px] mb-8 group">
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name" className="block autofill:bg-transparent py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#FF6464] peer" placeholder=" " required=""/>
                <label for="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FF6464] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Name *</label></div>
            <div className="relative z-0 w-full mb-8 group">
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} name="user_email" className="block autofill:text-red-900 needed py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#5185D4] peer" placeholder=" " id="user_email" required=""/>
                <label for="user_email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#5185D4] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Email *</label></div>
            <div className="relative z-0 w-full mb-8 group">
                <input type="text" value={msg} onChange={(e)=>{setMsg(e.target.value)}} className="block autofill:bg-yellow-200 py-2.5 px-0 w-full text-sm text-gray-lite bg-transparent border-0 border-b-[2px] border-[#B5B5B5] appearance-none dark:text-white dark:border-[#333333] dark:focus:border-[#FF6464] focus:outline-none focus:ring-0 focus:border-[#CA56F2] peer" placeholder=" " id="message" required=""/>
                <label for="message" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-color-910 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#CA56F2] peer-focus:dark:text-[#FF6464] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8">Message *</label></div>
            <div className="transition-all duration-300 ease-in-out inline-block rounded-lg mt-3">
                <button onClick={handleOnClick} className="flex items-center bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear hover:bg-gradient-to-l from-[#DD2476] to-[#fa5252ef] px-8 py-3 text-lg text-white rounded-[35px] mt-6">
                    Submit
                </button>
            </div>

            {submittedData && (
                <div className="text-left mt-8">
                <h2 className="text-2xl font-semibold text-pink-600 dark:text-white">Thank You, {submittedData.name}!</h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-2">
                    Your email "{submittedData.email}" and message "{submittedData.msg}" were successfully submitted.
                </p>
            </div>
            )}
        </form>
    </div>
  )
}

export default ContactForm