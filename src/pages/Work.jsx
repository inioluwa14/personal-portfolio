import React from 'react'
import instagram from '../assets/instagramClone.png'
import netflix from '../assets/netflixClone.png'
import nftCard from '../assets/nftCard.png'
import google from '../assets/GoogleResultPage.png'
import udemy from '../assets/udemyClone.png'
import todo from '../assets/todoList.png'

const Work = () => {
  return (
    <div name='projects' className='w-full h-full text-gray-300 bg-black'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
            <p className='py-6'>Check out some of my recents personal projects</p>
          </div>
          
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            <div style={{backgroundImage:`url(${udemy})`}}
              className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 text-white'>
                <span className='text-2xl font-bold tracking-wide'>
                  Udemy Clone Application
                </span>
                <div className='pt-8 text-center'>
                  <a href="https://inioluwa14.github.io/udemy_clone/" >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href="https://github.com/inioluwa14/udemy_clone">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
            <div style={{backgroundImage:`url(${netflix})`}}
              className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 text-white'>
                <span className='text-2xl font-bold tracking-wider '>
                  Netflix Clone Application
                </span>
                <div className='pt-8 text-center'>
                  <a href="https://64b90eda8347b26d21d6da28--flourishing-swan-fac73e.netlify.app/" >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href="https://github.com/inioluwa14/HtmlNetflix">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
            <div style={{backgroundImage:`url(${google})`}}
              className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 text-white'>
                <span className='text-2xl font-bold tracking-wide'>
                  Google Search Result Clone Application
                </span>
                <div className='pt-8 text-center'>
                  <a href="https://animated-kitsune-128405.netlify.app/" >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href="https://github.com/inioluwa14/Google-Search-Result-clone">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
            <div style={{backgroundImage:`url(${nftCard})`}}
              className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 text-white'>
                <span className='text-2xl font-bold tracking-wide'>
                  Card Clone Application
                </span>
                <div className='pt-8 text-center'>
                  <a href="https://inioluwa14.github.io/nft-preview-card-component-main/" >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href="https://github.com/inioluwa14/nft-preview-card-component-main">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
            <div style={{backgroundImage:`url(${instagram})`}}
              className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 text-white'>
                <span className='text-2xl font-bold tracking-wide'>
                  Instagram Clone Application
                </span>
                <div className='pt-8 text-center'>
                  <a href="https://inioluwa14.github.io/Htmlnstagram/" >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href="https://github.com/inioluwa14/Htmlnstagram">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
            <div style={{backgroundImage:`url(${todo})`}}
              className='shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div'>
              {/* Hover effect */}
              <div className='opacity-0 group-hover:opacity-100 text-white'>
                <span className='text-2xl font-bold tracking-wider '>
                  Todo List Application
                </span>
                <div className='pt-8 text-center'>
                  <a href="https://gregarious-mooncake-88574b.netlify.app/" >
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                  </a>
                  <a href="https://github.com/inioluwa14/todo-list">
                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Work