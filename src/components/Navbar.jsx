import React, { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'
const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => setToggle(!toggle);

  return (
    <div className='bg-black fixed w-full h-[70px] flex justify-between items-center px-4 text-white'>
        {/* bg-[#0F0103] */}
        <div>
            <span className='text-[#FEA6B6] text-2xl font-[900] tracking-[10px]' style={{textShadow: "2px 0px 0 #FEA6B6" }} >TIANA</span>
        </div>
        {/* menu */}
        <ul className='hidden md:flex'>
            <li> 
                <Link  to="home" smooth={true} duration={500}>
                Home
                </Link>
            </li>
            <li> 
                <Link  to="about" smooth={true} duration={500}>
                About
                </Link>
            </li>
            {/* <li>Resume</li> */}
            <li> 
                <Link  to="skills" smooth={true} duration={500}>
                Skills
                </Link>
            </li>
            <li> 
                <Link  to="projects" smooth={true} duration={500}>
                Projects
                </Link>
            </li>
            <li> 
                <Link  to="contact" smooth={true} duration={500}>
                Contact
                </Link>
            </li>
        </ul>
        
        {/* Hamburger */}
        <div onClick={handleClick } className='md:hidden z-10'>
            {!toggle ? <FaBars/> : <FaTimes />}
        </div>
        {/* Mobile menu */}
        
        <ul className={!toggle ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-400 flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
                </Link>
            </li>
            {/* <li className='py-6 text-4xl'>Resume</li> */}
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Skills
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                Projects
                </Link>
            </li>
            <li className='py-6 text-4xl'> 
                <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
                </Link>
           </li>
        </ul>
        

        {/* Social icons */}
        <div className='hidden md:flex md:flex-col md:fixed nmd:top-[35%] md:left-0 top-[50%]'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-800'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/christiana-adisa-">
                        LinkedIn <FaLinkedin />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://www.github.com/inioluwa14">
                        Github <FaGithub />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="/">
                        Mail <HiOutlineMail />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-pink-700'>
                    <a className='flex justify-between items-center w-full text-gray-300' href="https://drive.google.com/file/d/1iyqcX0CpXO7w_y3qMKsMVqnl7mYugrED/view?usp=sharing">
                        Resume <BsFillPersonLinesFill />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
