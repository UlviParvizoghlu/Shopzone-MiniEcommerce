import React, { Fragment, useState } from 'react'
import SliderComp from '../components/Home/SliderComp'
import Sorting from '../components/Home/Sorting'
import Category from '../components/Home/Category'
import Products from '../components/Home/Products'

const Home = () => {

  const [sort, setSort ] = useState('')
  const [category, setCategory] = useState('')
  return (
    <Fragment className='py-3'>
        <SliderComp/>
        <Sorting setSort={setSort}/>
        <div className='flex gap-2 items-start m-0'>
            <Category setCategory={setCategory}/>
            <Products category={category} sort={sort}/>
        </div>
    </Fragment>
  )
}

export default Home