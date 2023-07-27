import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-black text-gray-300'>
        <div className='flex flex-col justify-center items-center max-w-[1000px] mx-auto'>
            <div className='w-full h-full grid grid-cols-2 gap-8'>
                <div className='md:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                        About Me
                    </p>
                </div>
                <div></div>
                </div>
                <div className='w-full h-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I am Christiana. Pls take a look around</p>
                    </div>
                    <div>
                    I am a Frontend developer and I love bringing designs to live while ensuring good user experience. I am also a Computer Science student 
                    at the University of Ibadan who loves all things problem solving which includes programming. I started
                    my programming journey in 2018 when I learnt html/css, Javascript and python. Since
                    then, I have picked interest in solving problems relating to software
                    development. 
                    I have worked on projects to harness my development skills, attended tech programs to be more
                    informed about the industry, took some leadership positions and volunteered inorder to give back to my community.
                    I enjoy what I do and I am eager to use my programming experience and communication skills to help 
                    implement seamless user experience on websites while working in a team. Thank You. 
                    </div>
                </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default About