import React from 'react'
import { TbBrandMeta } from 'react-icons/tb';
import { IoLogoInstagram } from 'react-icons/io';
import { RiTwitterFill } from 'react-icons/ri';

const TopBar = () => {
  return (
    <div className='bg-rabbit-red text-white'>
      <div className='container mx-auto flex justify-between items-center py-3 px-4'>
        <div className='hidden md:flex items-center space-x-4'>
          <a href='' className='hover:text-gray-500'><TbBrandMeta className="h-5 w-5" /></a>
          <a href='' className='hover:text-gray-500'><IoLogoInstagram className='h-5 w-5' /></a>
          <a href='' className='hover:text-gray-500'><RiTwitterFill className='h-5 w-5' /></a>
        </div>
        <div className='text-center flex-grow'>
          <p>We Ship Worldwide fast and relaible shippng</p>
        </div>
       
        <div className='hidden md:block text-center text-sm'>
          <a className='hover:text-gray-500'>122 23-22222</a>
        </div>
      </div>
    </div>
  )
}

export default TopBar