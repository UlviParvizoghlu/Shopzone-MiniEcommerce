import React from 'react'

const Sorting = ({setSort}) => {
  return (
    <div className='bg-gray-100 my-5 p-5 flex justify-end items-center '>
        <select onChange={e=> setSort(e.target.value)} className='cursor-pointer bg-transparent px-5 py-3 outline-none' name="filter" id="">
            <option active disabled value="">Filter by Price</option>
            <option value="inc">Low to High</option>
            <option value="dec">High to Low</option>
        </select>
    </div>
  )
}

export default Sorting