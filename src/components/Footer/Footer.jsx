import React from 'react'
import logo from '../../assets/images/shopzone.png'
const Footer = () => {
  return (
    <div className='flex justify-center items-center rounded-md text-center gap-5 text-white bg-black py-6 text-3xl font-bold'><img className='w-[10%] object-cover' src={logo} alt="" /><span>w/FakeStoreApi</span></div>
  )
}

export default Footer