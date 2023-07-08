import React from 'react'
import {BiSearch} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import {BsBasket3} from 'react-icons/bs'
const NavbarRight = () => {
  return (
    <div className='flex items-center gap-7'>
        <div className='flex items-center border p-2 rounded-full bg-gray-200'>
            <input className='bg-gray-200 outline-none' type="text" placeholder='Search' />
            <BiSearch size={28}/>
        </div>
        <AiOutlineHeart size={28}/>
        <div className='relative'>
            <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>3</div>
            <BsBasket3 size={28}/>
        </div>
    </div>
  )
}

export default NavbarRight