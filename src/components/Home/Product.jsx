import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = ({product}) => {

  const navigate = useNavigate();

  return (
    <div onClick={()=> navigate(`products/${product?.id}`)} className='w-[340px] p-2 m-2  rounded-md shadow-lg hover:cursor-pointer'>
        <img  className='w-[200px] h-[200px]  m-auto' src={product?.image} alt="" />
        <div className='text-center p-3 font-bold'>{product?.title}</div>
        <div className='text-center p-2 font-bold text-xl'>{product?.price} $</div>


    </div>
  )
}

export default Product