import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/node.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import mongo from '../assets/mongo.png'
import figma from '../assets/figma.png'

const Experience = () => {

    const experience = [
        {
            id: 1,
            technologies: 'HTML',
            src: html,
            style: 'shadow-orange-500',
        },
        {
            id: 2,
            technologies: 'CSS',
            src: css,
            style: 'shadow-blue-500',
        },
        {
            id: 3,
            technologies: 'JavaScript',
            src: javascript,
            style: 'shadow-yellow-500',
        },
        {
            id: 4,
            technologies: 'React',
            src: react,
            style: 'shadow-cyan-500',
        },
        {
            id: 7,
            technologies: 'GitHub',
            src: github,
            style: 'shadow-white',
        },
        {
            id: 5,
            technologies: 'Node',
            src: node,
            style: 'shadow-green-500',
        },
        {
            id: 8,
            technologies: 'MongoDB',
            src: mongo,
            style: 'shadow-green-900',
        },
        {
            id: 9,
            technologies: 'Tailwind',
            src: tailwind,
            style: 'shadow-cyan-300',
        },
        {
            id: 10,
            technologies: 'Figma',
            src: figma,
            style: 'shadow-white',
        },
    ]

    return (
        <div name="experience" className='bg-gradient-to-b from-gray-800 to-black w-full text-white'>
            <div className='max-w-screen-lg p-4 mx-auto'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Experience
                    </p>
                    <p className='text-xl py-6'> 
                        These are the technologies I've worked with.
                    </p>
                </div>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 justify-center items-center text-center'>
                    {experience.map(({ id, technologies, src, style }) => (
                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <img src={src} alt={technologies} className='w-20 mx-auto' />
                            <p className='mt-4'>{technologies}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Experience
