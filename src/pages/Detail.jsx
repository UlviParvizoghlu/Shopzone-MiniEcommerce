import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProductDetail } from '../redux/productSlice'
import Loading from '../components/Loading'
import DetailComp from '../components/Detail/DetailComp'

const Detail = () => {

    const {id} = useParams()
    const dispatch = useDispatch()

    const {productDetail, productDetailStatus} = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProductDetail(id))
    }, [dispatch, id])
    
  return (
    <div>
        {
            productDetailStatus == "LOADING" ? <Loading/> : <DetailComp productDetail={productDetail}/>
        }
    </div>
  )
}

export default Detail