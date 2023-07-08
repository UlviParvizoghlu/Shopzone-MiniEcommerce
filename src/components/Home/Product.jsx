import React from 'react'

const Product = ({product}) => {
  return (
    <div className='w-[340px] p-2 m-2 border rounded-md'>
        <img  className='w-[200px] h-[200px]  m-auto' src={product?.image} alt="" />
        <div className='text-center p-3 font-bold'>{product?.title}</div>
        <div className='text-center p-2 font-bold text-xl'>{product?.price} $</div>


    </div>
  )
}

export default Product