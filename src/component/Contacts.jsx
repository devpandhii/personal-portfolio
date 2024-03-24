import React from 'react'

const Contacts = () => {
  return (
    <div name="contact" className='bg-gradient-to-b from-black via-black to-gray-800 w-full text-white p-4'>
      <div className='max-w-screen-lg mx-auto'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
            Contact
          </p>
          <p className='text-xl py-6'>
            Submit the form below to get in touch with me.
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <form action='https://getform.io/f/026f2308-107a-42a3-84e6-6798a00d9072' method='POST' className='flex flex-col w-full md:w-2/3 lg:w-1/2'>
            <input type='text' name='name' placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4'/>
            <input type='email' name='email' placeholder='Enter your email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4'/>
            <textarea type='text' name='message' placeholder="Enter your message" rows={6} className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-4'/>
            <button className='text-white px-6 py-3 mx-auto flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:scale-110 duration-300 cursor-pointer'>
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contacts
