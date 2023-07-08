import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../redux/categorySlice";

const Category = ({setCategory}) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);


  return (
    <div className="bg-gray-100 w-1/6 p-4 m-0">
      <div className="border-b pb-1 px-2 text-xl font-bold">Category</div>
      {categories?.map((category, index) => {
        const capitalizedCategory =
          category.charAt(0).toUpperCase() + category.slice(1);
        return (
          <div onClick={()=>setCategory(category)} className="text-lg p-2 hover:bg-gray-300 cursor-pointer rounded-lg" key={index}>
            {capitalizedCategory}
          </div>
        );
      })}
    </div>
  );
};

export default Category;
