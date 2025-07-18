import React from 'react'
import { FaTelegram } from 'react-icons/fa'
import { IoLogoFacebook, IoLogoYoutube } from 'react-icons/io'

function Footer() {
  return (
    <div className='bg-blue-950 py-5'>
      <div className='w-[95%] sm:w-[80%] lg:w-[70%] mx-auto flex justify-between '>
        <div className='text-white w-[50%] sm:w-[25%] my-3'>
          <h2 className='font-bold text-xl'>Course</h2>
          <ul className='mt-3 list-disc pl-4'>
            <li className='ml-3 text-gray-300'>Frontend</li>
            <li className='ml-3 text-gray-300'>Backend</li>
            <li className='ml-3 text-gray-300'>App</li>
            <li className='ml-3 text-gray-300'>Netword</li>
          </ul>
        </div>
        <div className='text-white w-[50%] sm:w-[25%] my-3'>
          <h2 className='font-bold text-xl'>About Us</h2>
          <ul className='mt-3 list-disc pl-4'>
            <li className='ml-3 text-gray-300'>Good Teaching</li>
            <li className='ml-3 text-gray-300'>Friendly Teacher</li>
            <li className='ml-3 text-gray-300'>A lot of Courses</li>
            <li className='ml-3 text-gray-300'>Good Price</li>
          </ul>
        </div>
        <div className='text-white w-[50%] sm:w-[25%] my-3'>
          <h2 className='font-bold text-xl'>Support</h2>
          <ul className='mt-3 list-disc pl-4'>
            <li className='ml-3 text-gray-300'>Contact Us</li>
            <li className='ml-3 text-gray-300'>Help Center</li>
            <li className='ml-3 text-gray-300'>Privacy</li>
          </ul>
        </div>
        <div className='text-white w-[50%] sm:w-[25%] my-3'>
          <h2 className='font-bold text-xl'>Our Socails</h2>
          <ul className='mt-3 flex'>
            <li className=' text-gray-300 text-2xl'>
              <IoLogoFacebook/>
            </li>
            <li className='ml-3 text-gray-300 text-2xl'>
              <FaTelegram/>
            </li>
            <li className='ml-3 text-gray-300 text-2xl'>
              <IoLogoYoutube/>
            </li>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
