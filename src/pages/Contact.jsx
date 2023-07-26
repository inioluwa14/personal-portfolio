import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-black flex justify-center items-center p-4'>
        <form method='post' action="https://getform.io/f/7532299d-a241-4b1e-b46f-f70ef2aa28cf" className='flex flex-col max-w-[600px] w-full'>
          <div className='pb-8'>
            <p className='text-4xl text-gray-300 inline border-b-4 border-pink-600'>Contact</p>
            <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - inioluwaadisa@gmail.com</p>
          </div>
          <input className='bg-[#CCD6F6] p-2' type="text" placeholder='Name' name='name'/>
          <input className='my-4 p-2 bg-[#CCD6F6]' type="emal" placeholder='Email' name='email'/>
          <textarea className='bg-[#CCD6F6] p-2' name="message" rows="10">Message</textarea>
          <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's collaborate</button>
        </form>
    </div>
  )
}

export default Contact