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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, eos doloribus consequuntur minima voluptate nostrum iusto, molestias mollitia expedita nesciunt, distinctio sed aut laudantium sapiente est quo nam officiis odit.
                        Aliquid neque amet fugit illum non, est quis. Voluptatibus beatae temporibus, nihil fugit sunt ad ab laborum reiciendis, suscipit dolore quidem cum culpa? Id odio magni ipsum debitis ad laboriosam.
                        Vel, architecto! Aliquid itaque praesentium sequi ullam harum nesciunt sunt unde facere! Fuga minus ab rem eveniet ut nulla, inventore praesentium tenetur? Ex tempora iste sequi doloremque a dicta autem.
                    </div>
                </div>
            {/* </div> */}
        </div>
    </div>
  )
}

export default About