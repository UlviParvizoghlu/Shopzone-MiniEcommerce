import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cartSlice'

const DetailComp = ({productDetail}) => {

    const dispatch = useDispatch()

    const [quantity, setQuantity] = useState(1)


    const addBasket = ()=>{
        dispatch(addToCart({id: productDetail?.id, title: productDetail?.title, image: productDetail?.image, price: productDetail?.price  ,quantity: quantity}))
        window.location.reload(); 

    }
  return (
    <div className='flex items-center justify-center  px-5 py-16 gap-6'>
        <div className='w-[35%] h-[500px] border rounded-lg p-4'> <img className=' w-[100%] h-[100%]' src={productDetail?.image} alt="" /></div>
        <div className='w-[60%] flex flex-col gap-4'>
            <div className='font-bold text-4xl'>{productDetail?.title}</div>
            <div className='text-2xl'>{productDetail?.description}</div>
            <div className='text-2xl text-red-500 font-extrabold'>Rating: {productDetail?.rating?.rate}</div>
            <div className='text-2xl  font-extrabold'>inStock: {productDetail?.rating?.count}</div>
            <div className='text-3xl font-extrabold'>{productDetail?.price} $</div>
            <div className='flex items-center gap-5 '>
                <div onClick={()=>quantity>1 ? setQuantity(quantity-1): ""} className='cursor-pointer text-5xl text-center'>-</div>
                <input className='w-12 text-3xl font-extrabold text-center' type="text" value={quantity} />
                <div onClick={()=>quantity<productDetail?.rating?.count ? setQuantity(quantity+1): ""} className='cursor-pointer text-3xl text-center'>+</div>
            </div>
            <div onClick={addBasket} className=' w-[200px] h-12 text-white  flex items-center justify-center rounded-lg bg-black font-extrabold cursor-pointer '>
                Add to Cart
            </div>

        </div>
    </div>
  )
}

export default DetailComp