import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../redux/cartSlice'

const CartComp = ({cart}) => {
    const dispatch = useDispatch()
    const handleRemoveFromCart = () => {
        dispatch(removeFromCart(cart?.id));
        window.location.reload(); 
      };
  return (
    <div className='my-5 w-[75%] flex justify-between items-center gap-4 m-auto py-6'>
        <img className='w-[150px] h-[150px] ' src={cart?.image} alt="" />
        <div>
            <div className='font-bold '>{cart?.title}</div>
        </div>
        <div>
            <div className='font-extrabold text-xl'>{cart?.price} $ <span className='text-red-500'>({cart?.quantity})</span></div>
        </div>
            <div onClick={handleRemoveFromCart} className='cursor-pointer font-bold text-lg bg-red-500 text-white flex justify-center items-center h-16 w-[200px] rounded-lg'>Delete from Cart</div>
    </div>
  )
}

export default CartComp