import React from 'react'
import chatApp from '../assets/portfolio/chatApp.png'
import food from '../assets/portfolio/food.png'
import tastyWaves from '../assets/portfolio/tastyWaves.png'
// import reactParallax from '../assets/portfolio/arrayDestruct.jpg'
// import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
// import reactWeather from '../assets/portfolio/reactWeather.jpg'
// import usestate from '../assets/portfolio/usestate.jpg'

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
        },
        // {
        //     id: 4,
        //     src: reactParallax,
        // },
        // {
        //     id: 5,
        //     src: reactSmooth,
        // },
        // {
        //     id: 6,
        //     src: reactWeather,
        // },
        // {
        //     id: 7,
        //     src: usestate,
        // },
    ]

    return (
        <div name="workfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Workfolio
                    </p>
                    <p className='text-xl py-6'>
                        Check out some of my work here.
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>


                    {
                        workfolio.map(({ id, src, demoLink, codeLink }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt='' className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <a href={demoLink} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                        Demo
                                    </a>
                                    <a href={codeLink} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                        Code
                                    </a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Workfolio