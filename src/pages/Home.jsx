import React from 'react'
import pic from '../assets/ini.png'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name='home' className='w-full h-full bg-black  pb-[6em]'>
        {/* bg-[#0F0103] */}
        <div className='md:flex md:place-items-center md:text-left justify-evenly pt-[4em] '>
            <div className='pb-[4em] text-center'>
                <p className='text-[12px] text-white'>HELLO!</p>
                <h1 className='text-[7vh] text-white'>I'm 
                    <span className='text-pink-600 font-extrabold'> Christiana Adisa</span>
                    {/* text-[#FEA6B6] */}
                </h1>
                <h2 className='text-[#8892B0] text-[4vh]'>I'm a FrontEnd Developer</h2>
                <div className='flex mt-4'>
                    <button className='flex group items-center mr-[-40px] mx-auto border-2 border-pink-600 bg-pink-600 px-3 py-2 text-white text-[16px] rounded-[2em] hover:ease-in hover:duration-300 '>
                        <Link className='flex'  to="about" smooth={true} duration={500}>
                        View Work 
                        <span className='flex items-center group-hover:rotate-90 duration-300'>
                            <HiArrowNarrowRight className='ml-[1em]'/>
                        </span>
                        </Link>

                    </button>
                    <button className='flex items-center mx-auto px-3 py-2  text-pink-600 text-[16px] rounded-[2em] hover:border-pink-600  hover:border-2 hover:text-white hover:ease-in '>
                        <Link className='flex'  to="contact" smooth={true} duration={500}>
                            Hire Me 
                            <span className='flex items-center'><HiArrowNarrowRight className='ml-[1em] ' /></span>
                        </Link>
                    </button>
                </div>
            </div>
            
            <div className='flex'>
                <img src={pic} alt="Hero Pic" style={{width:'500px', height:'500px', borderRadius:"20px"}} />
            </div>
            
        </div>
    </div>
  )
}

export default Home