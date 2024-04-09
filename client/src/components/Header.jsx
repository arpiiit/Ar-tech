import React from 'react'
import {Button, Navbar, TextInput} from 'flowbite-react'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";



function Header() {

  const path=useLocation().pathname;
  
  return (
    <Navbar className='border-b-2'>
        <Link className='self-center font-serif whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white' to='/'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-300 via-purple-500 to-pink-400 rounded-lg text-white'>Arpit's</span>
            <span className='italic font-serif'>TechBlog</span>
            
        </Link>
        <form action="">
            <TextInput
            type='text'
            placeholder='Search...'
            rightIcon={AiOutlineSearch}
            className='hidden lg:inline'
            />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='gray'>
            <AiOutlineSearch/>
        </Button>
        <div className='flex gap-2 md:order-2'>
          <Button className='w-12 h-10 hidden sm:inline' color='gray'>
            <FaMoon/>
          </Button>
          <Link to='/sign-in'>
            <Button className='' gradientDuoTone='purpleToBlue'>
              Sign In
            </Button>
          </Link>
          <Navbar.Toggle/>
        </div>
          <Navbar.Collapse>
            <Navbar.Link active={path=== '/'} as={'div'}>
              <Link to="/">
                 Home
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path=== '/about'} as={'div'}>
              <Link to="/about">
                About
              </Link>
            </Navbar.Link>
            <Navbar.Link active={path=== '/projects'} as={'div'}>
              <Link to="/projects">
                Projects
              </Link>
            </Navbar.Link>
          </Navbar.Collapse>
    </Navbar>
  )
}

export default Header