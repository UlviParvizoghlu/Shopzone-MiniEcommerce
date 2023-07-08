import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/images/shopzone.png'

const NavbarLeft = () => {
  const navigate =useNavigate()
  return (
    <div onClick={()=>navigate(`/`)} className='text-5xl font-bold cursor-pointer'><img className='w-[60%] object-cover' src={logo} alt="" /></div>
  )
}

export default NavbarLeft