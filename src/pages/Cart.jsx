import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCartTotal } from '../redux/cartSlice'
import CartComp from '../components/Cart/CartComp'

const Cart = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
  const {carts, totalAmount, itemCount} = useSelector(state=> state.carts)
  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])
  return (
    <div>
        {
            carts?.length > 0 ? <div className="py-40">
                {
                    carts?.map((cart, index) => {
                        return <CartComp key={index} cart={cart} />
                    })
                }
                <div className='flex items-center justify-end text-center font-extrabold text-3xl py-5 '>Total: <span className='text-red-600 ml-2'>{totalAmount} $</span></div>                
            </div> :
            <div className='flex items-center justify-center p-72 text-5xl font-extrabold'>
                Empty...
            </div>
        }
    </div>
  )
}

export default Cart