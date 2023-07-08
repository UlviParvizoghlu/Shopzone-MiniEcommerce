import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import Products from "./Products";
const SliderComp = () => {
  
  const settings = {
    arrows: false,
    dots: false,
    pauseOnHover: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 6000,
    fade: true,
    variableWidth: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const navigate = useNavigate();
  return (
    <div>
      <Slider {...settings}>
        <div className="!flex items-center bg-gray-100 px-6 rounded-md">
          <div className="">
            <div className="text-6xl font-bold">Products Features</div>
            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eius
              debitis deserunt excepturi alias. Aperiam, vitae molestias
              voluptates architecto autem, quaerat incidunt, ipsa officia
              impedit eveniet perferendis est quisquam voluptatum.
            </div>
            <div onClick={()=>navigate("shop")} className="border-2 bg-gray-200 cursor-pointer flex items-center font-bold text-xl justify-center w-[200px] h-16 rounded-full hover:bg-gray-300 transition-all duration-500">
              Review All
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/abf1df44-8d47-410f-b17b-0d27cbe27a43/air-max-solo-mens-shoes-4SzqpT.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6 rounded-md">
          <div className="">
            <div className="text-6xl font-bold">Products Features</div>

            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eius
              debitis deserunt excepturi alias. Aperiam, vitae molestias
              voluptates architecto autem, quaerat incidunt, ipsa officia
              impedit eveniet perferendis est quisquam voluptatum.
            </div>
            <div onClick={()=>navigate("shop")} className="border-2 bg-gray-200 cursor-pointer flex items-center font-bold text-xl justify-center w-[200px] h-16 rounded-full hover:bg-gray-300 transition-all duration-500">
              Review All
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f147a002-d8af-4ce1-acd8-6b7b90a0be83/pegasus-40-se-mens-road-running-shoes-MCGW9h.png"
            alt=""
          />
        </div>
        <div className="!flex items-center bg-gray-100 px-6 rounded-md">
          <div className="">
            <div className="text-6xl font-bold">Products Features</div>

            <div className="text-lg my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eius
              debitis deserunt excepturi alias. Aperiam, vitae molestias
              voluptates architecto autem, quaerat incidunt, ipsa officia
              impedit eveniet perferendis est quisquam voluptatum.
            </div>
            <div onClick={()=>navigate("shop")} className="border-2 bg-gray-200 cursor-pointer flex items-center font-bold text-xl justify-center w-[200px] h-16 rounded-full hover:bg-gray-300 transition-all duration-500">
              Review All
            </div>
          </div>
          <img
            src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/45eb504d-4ca0-4675-80cf-720913d53f3e/tech-hera-womens-shoes-NjvkxR.png"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
