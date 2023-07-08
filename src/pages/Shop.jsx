import React, { Fragment, useState } from 'react'
import Sorting from '../components/Home/Sorting'
import Category from '../components/Home/Category'
import ProductsShop from '../components/Shop/ProductsShop'
const Shop = () => {

  const [sort, setSort ] = useState('')
  const [category, setCategory] = useState('')

  return (
    <Fragment className='py-3'>
        <Sorting setSort={setSort}/>
        <div className='flex gap-2 items-start m-0'>
            <Category setCategory={setCategory}/>
            <ProductsShop category={category} sort={sort}/>
        </div>
    </Fragment>
  )
}

export default Shop