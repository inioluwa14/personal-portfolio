import React from 'react'
import html from '../assets/html-5.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import react from '../assets/react.png'
import github from '../assets/github (1).png'
import python from '../assets/python.png'
import tailwind from '../assets/tailwind-css.png'
import bootstrap from '../assets/bootstrap.png'
const Skills = () => {
  return (
    <div name='skills' className='bg-black text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={html} alt="html logo" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={css} alt="csslogo" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={js} alt="javascript logo" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="raect logo" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={github} alt="github logo" />
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img className='mt-6 w-20 mx-auto' src={tailwind} alt="tailwind logo" />
                    <p className='my-4'>TAILWIND CSS</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={bootstrap} alt="bootstrap logo" />
                    <p className='my-4'>BOOTSTRAP</p>
                </div>
                <div className='shadow-md shadow-[#040C16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={python} alt="python logo"/>
                    <p className='my-4'>PYTHON</p>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Skills