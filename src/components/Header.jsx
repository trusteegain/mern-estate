import React from 'react'
import {GoSearch} from 'react-icons/go'
import { BiSun } from 'react-icons/bi'
import { RiAccountCircleLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
     <header className='bg-slate-200 shadow-md'>

        {/* THIS IS THE CONTAINER WRAPPING THE NAV BAR */}
        <nav className='flex justify-between items-center max-w-6xl mx-auto p-3 gap-2'>

            {/* THIS IS THE LOGO TEXT */}

     <Link to='/'>
        <h1 className='font-bold text-xl sm:text-xl flex flex-wrap cursor-pointer'>
            <span className='text-slate-500'>Trustee</span>
            <span className='text-slate-900 decoration-slate-900'>Gain</span>
        </h1>
    </Link>

        {/* THIS IS THE SEARCH BAR  */}
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64'/>
            <GoSearch className='text-slate-600 '/>
        </form>

        {/* THIS IS THE MENU BAR */}

        <ul className='flex gap-4'>

            <Link to='/'>
            <li className='hidden sm:inline text-slate-600 hover:underline'>Home</li>
            </Link>

            <Link to='/blogs'>
            <li className='hidden sm:inline text-slate-600 hover:underline'>Blogs</li>
            </Link>
            
            <Link to='/new-blog'>
            <li className='hidden sm:inline text-slate-600 hover:underline'>New Blog</li>
            </Link>
            
            <Link to='/about'>
            <li className='hidden sm:inline text-slate-600 hover:underline'>About Us</li>
            </Link>
            <Link to='/contact'>
            <li className='hidden sm:inline text-slate-600 hover:underline'>Contact</li>
            </Link>

            <Link to='/sign-in'>
            <li className='text-slate-600 hover:underline'>Sign in</li>
            </Link>
        </ul>

        <div className="toggleDark flex gap-4">
            <BiSun className='w-6 h-6 cursor-pointer hover:text-slate-800'/>
            <RiAccountCircleLine className='w-6 h-6' />
        </div>

        </nav>
     </header>
  )
}

export default Header