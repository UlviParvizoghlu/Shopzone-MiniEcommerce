import React from 'react'

const Sorting = () => {
  return (
    <div className='bg-gray-100 my-5 p-5 flex justify-end items-center '>
        <select className='cursor-pointer bg-transparent px-5 py-3 outline-none' name="filter" id="">
            <option disabled value="">Choose One</option>
            <option value="inc">Low to High</option>
            <option value="dec">High to Low</option>
        </select>
    </div>
  )
}

export default Sorting