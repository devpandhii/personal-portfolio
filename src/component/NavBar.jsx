import React, { useState } from 'react'
import { FaBars, FaTimes  } from 'react-icons/fa'
import { Link } from 'react-scroll';


const NavBar = () => {
    const [nav, setNav] = useState(false);
    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 1,
            link: 'about'
        },
        {
            id: 1,
            link: 'workfolio'
        },
        {
            id: 1,
            link: 'experience'
        },
        {
            id: 1,
            link: 'contact'
        },
    ]

  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-inherit px-5 '>
        <div>
            <h1 className='text-5xl font-signature ml-2 text-gray-250'>Dev Pandhi</h1>
        </div>
        <ul className='hidden md:flex'>
                {links.map(({id, link}) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200'>
                        <Link to={link} smooth duration={500}>
                            {link}
                        </Link>
                    </li>
                ))}
        </ul>
        
        <div onClick = {() => setNav(!nav)} className='pr-4 z-10 text-gray-300 cursor-pointer md:hidden'>
            {nav ? <FaTimes size={25}/> : <FaBars size={25}/>}
        </div>

        {nav && (<ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-900'>
        {links.map(({id, link}) => (
                    <li key={id} className='py-6 px-4 text-4xl cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200'>
                        <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>
                            {link}
                        </Link></li>
                ))}
        </ul>)}
    </div>
  );
};

export default NavBar