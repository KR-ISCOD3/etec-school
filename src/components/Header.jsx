import React, { useState } from 'react'
import { IoClose, IoMenu } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'

function Header() {
  const [isopen,setIsopen] = useState(false);
   
  return (
    <div className=''>
        <header className='w-full py-3'>

        {/* navbar-menu */}
        <nav className='w-[95%] md:w-[80%] mx-auto flex justify-between items-center'>
            {/* logo and menu */}
            <div className='flex items-center'>
                   <NavLink to={"#"}>
                    <div className='flex items-center me-3'> 
                        <div className='w-[50px] h-[50px] bg-gray-500 overflow-hidden'>
                            <img src="./image/logoetec.png" alt="" className='w-full h-full object-cover'/>
                        </div>
                        <h1 className='text-xl font-extrabold ms-1'>
                            ETEC-CENTER
                        </h1>
                    </div>  
                   </NavLink>

                <ul className='hidden lg:flex font-medium'>
                    <NavLink to={"#"}>
                        <li className='mx-5'>
                            About
                        </li>
                    </NavLink>
                    <NavLink to={"#"}>
                        <li className='mx-5'>
                            Course
                        </li>
                    </NavLink>
                    <NavLink to={"#"}>
                        <li className='mx-5'>
                            Pricing
                        </li>
                    </NavLink>
                    <NavLink to={"#"}>
                        <li className='mx-5'>
                            Contact
                        </li>
                    </NavLink>
                </ul>
            </div>

            {/* button login and register */}
            <div className='hidden lg:flex font-medium'>
                <button className=''>
                    Sign in
                </button>
                <button className='ms-5 bg-blue-950 px-5 py-2 rounded-3xl text-white hover:bg-blue-900'>
                    Register
                </button>
            </div>

            {/* button toggle menu */}
            <button className='lg:hidden' onClick={()=>setIsopen(!isopen)}>      
                {isopen ? <IoClose className='text-3xl'/> : <IoMenu className='text-3xl'/>}
            </button>
        </nav>

        {/* dropdown-menu */}  
        <div className={`${isopen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} 
            duration-300 w-[100%] absolute top-45 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-2 
            bg-gray-300 h-auto py-3 text-center md:w-[80%] `}>

            {/* list-menu-dropdown */}
            <ul className='font-medium '>
                <NavLink to={"#"}>
                    <li className=' pb-2 border-b border-gray-400'>
                        About
                    </li>
                </NavLink>
                <NavLink to={"#"}>
                    <li className=' py-2 border-b border-gray-400'>
                        Course
                    </li>
                </NavLink>
                <NavLink to={"#"}>
                    <li className=' py-2 border-b border-gray-400'>
                        Pricing
                    </li>
                </NavLink>
                <NavLink to={"#"}>
                    <li className=' pt-2 '>
                        Contact
                    </li>
                </NavLink>
            </ul>
            <div className='mt-4 flex  gap-1 justify-center border-t border-gray-400 pt-3'>
            <button className=' bg-blue-950 px-5 py-2 rounded-3xl text-white hover:bg-blue-900'>
                Sign in
            </button>
            <button className=' bg-blue-950 px-5 py-2 rounded-3xl text-white hover:bg-blue-900'>
                    Register
            </button>
            </div>
        </div>
            
        </header>
    </div>
  )
}

export default Header
