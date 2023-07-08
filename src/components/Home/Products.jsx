import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryProducts, getProducts } from "../../redux/productSlice";
import Loading from "../Loading";
import Product from "./Product";
import ReactPaginate from "react-paginate";

const Products = ({category}) => {
    const dispatch = useDispatch()
    const {products, productsStatus} = useSelector(state => state.products)

    const [itemOffset, setItemOffset] = useState([]);
    const itemsPerPage = 6
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = products.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % products.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };


    useEffect(() => {
        if(category){
            dispatch(getCategoryProducts(category))
        }
        else{
            dispatch(getProducts())
        }
    }, [dispatch, category])
    
  return <div>
    {
        productsStatus == "LOADING" ? <Loading/> :
        <Fragment>

        <div className="flex flex-wrap gap-0">
            {
                currentItems?.map((products,index) => {
                    return <Product key={index} product={products}/>
                })
            }
        </div>
        <ReactPaginate
        className="paginate"
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Prev"
        renderOnZeroPageCount={null}
      />
        </Fragment>
    }
  </div>;
};

export default Products;
