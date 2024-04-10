import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Label, TextInput } from 'flowbite-react'


function Signup() {
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex gap-10 p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center'>
        {/* left */}
        <div className='flex-1'>
        <Link className='font-serif font-bold dark:text-white text-4xl' to='/'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-300 shadow-lg via-purple-500 to-pink-400 rounded-md text-white'>Arpit's</span>
            <span className='italic font-serif'>TechBlog</span>
        </Link>
        <p className='text-sm mt-5'>
          Explore my blog world and enhance new features to explore new things and upload new images that you like.
        </p>
        </div>

        {/* right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div className=''>
              <Label value='Your Username'/>
              <TextInput type='text' placeholder='Username' id='username'/>
            </div>
            <div className=''>
              <Label value='Your Email'/>
              <TextInput type='text' placeholder='name@gmail.com' id='email'/>
            </div>
            <div className=''>
              <Label value='Your Password'/>
              <TextInput type='password' placeholder='Password' id='password'/>
            </div>
            <Button gradientDuoTone='purpleToBlue' type='submit'>Sign up</Button>
          </form>
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account? </span>
            <Link to='/sign-in' className='text-blue-500'> Sign in</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Signup
