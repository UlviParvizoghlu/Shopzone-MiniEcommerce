import React from 'react'
import NavbarLeft from './NavbarItems/NavbarLeft'
import NavbarRight from './NavbarItems/NavbarRight'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center my-5 py-2 px-20 '>
      <NavbarLeft/>
      <NavbarRight/>
    </div>
  )
}

export default Navbar