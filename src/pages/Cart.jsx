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
            carts?.length > 0 ? <div>
                {
                    carts?.map((cart, index) => {
                        return <CartComp key={index} cart={cart} />
                    })
                }                
            </div> :
            <div>
                Empty...
            </div>
        }
    </div>
  )
}

export default Cart