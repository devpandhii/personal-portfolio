import React from 'react'
import chatApp from '../assets/portfolio/chatApp.png'
import food from '../assets/portfolio/food.png'
import tastyWaves from '../assets/portfolio/tastyWaves.png'

const Workfolio = () => {

    const workfolio = [
        {
            id: 1,
            src: tastyWaves,
            demoLink: '',
            codeLink: 'https://github.com/devpandhii/tastywaves',
        },
        {
            id: 2,
            src: chatApp,
            demoLink: '',
            codeLink: 'https://github.com/devpandhii/chatApp',
        },
        {
            id: 3,
            src: food,
            demoLink: 'https://food200.onrender.com/',
            codeLink: 'https://github.com/devpandhii/Error404',
        }
    ]

    return (
        <div name="workfolio" className='flex items-center justify-center bg-gradient-to-b from-black to-gray-800 w-full text-white' style={{ minHeight: "100vh" }} >
            <div className='max-w-screen-lg p-4 mx-auto'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Workfolio
                    </p>
                    <p className='text-xl py-6'>
                        Check out some of my work here.
                    </p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4'>
                    {workfolio.map(({ id, src, demoLink, codeLink }) => (
                        <div key={id} className='flex flex-col justify-between items-center bg-gray-700 rounded-lg p-4'>
                            <img src={src} alt='' className='w-full rounded-md mb-4' />
                            <div className='flex justify-around w-full'>
                                <a href={demoLink} className='w-1/2 px-6 py-3 text-center rounded-md bg-blue-500 hover:bg-blue-600 text-white'>
                                    Demo
                                </a>
                                <a href={codeLink} className='w-1/2 px-6 py-3 text-center rounded-md bg-blue-500 hover:bg-blue-600 text-white'>
                                    Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Workfolio
