import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import HeroImage from '../assets/heroImage.JPG'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm Full Stack Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>A passionate and driven, Computer Engineering student, eager to apply technical skills and gain hands-on experience in the industry. Currently pursuing a Bachelor's degree in Computer Science and Engineering (IOT and Cybersecurity with Block Chain Technology) with a focus on programming languages and software development. </p>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span chidren className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={25}/>
                        </span>
                    </button>
                </div>
            </div>
            <div className='ml-6'>
                <img src={HeroImage} alt='My Profile' className='flex mx-auto w-2/3 md:w-full rounded-2xl'/>
            </div>
        </div>
    </div>
  )
}

export default Home