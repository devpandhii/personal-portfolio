import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaSquareGithub, FaXTwitter} from 'react-icons/fa6'
import {BiMailSend} from 'react-icons/bi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {IoDocumentTextOutline} from 'react-icons/io5'


const SocialLinks = () => {
  const links = [
    {
        id: 1,
        child: (
            <>
                LinkedIn <BsLinkedin size={30}/>
            </>
        ),
        href:"https://www.linkedin.com/in/devpandhi/",
        style: 'rounded-tr-md',
    },
    {
        id: 2,
        child: (
            <>
                Github <FaSquareGithub size={33}/>
            </>
        ),
        href:"https://www.github.com/devpandhii/",
    },
    {
        id: 3,
        child: (
            <>
                Mail <BiMailSend size={30}/>
            </>
        ),
        href:"mailto:devpandhi1@gmail.com",
    },
    {
        id: 4,
        child: (
            <>
                Instagram <AiOutlineInstagram size={33}/>
            </>
        ),
        href:"https://www.instagram.com/devpandhii/",
    },
    {
        id: 5,
        child: (
            <>
                Twitter <FaXTwitter size={27}/>
            </>
        ),
        href:"https://www.twitter.com/devpandhii/",
    },
    {
        id: 6,
        child: (
            <>
                Resume <IoDocumentTextOutline size={30}/>
            </>
        ),
        href:"/Dev-Resume.pdf",
        style: 'rounded-br-md',
        download: false,
    },
  ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map((links)=>(
                <li key={links.id} className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${links.style}`} >
                <a href={links.href} className='flex justify-between items-center w-full text-white'download={links.download} target='_blank' rel="noreferrer">
                    {links.child}               
                </a>
            </li>
            ))}

            
        </ul>
    </div>
  )
}

export default SocialLinks