'use client';
import React, { useState } from 'react'
// import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
import { RxLinkedinLogo } from "react-icons/rx";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoIosHeartEmpty } from "react-icons/io";
import Link from "next/link";
import { IoIosCloseCircle } from "react-icons/io";
import { RxLockClosed } from "react-icons/rx";
const Details = () => {

  const [showCartBox, setShowCartBox] = useState(false);



  const details = [
    {
      id: 1,
      name: "Trenton modular sofa_3",
      price: "Rs. 25,000.00",
      image: "/images/top-p1.png",
    },
    {
      id: 2,
      name: "Granite dining table with dining chair",
      price: "Rs. 25,000.00",
      image: "/images/top-p2.png",
    },
    {
      id: 3,
      name: "Outdoor bar table and stool",
      price: "Rs. 25,000.00",
      image: "/images/top-p3.png",
    },
    {
      id: 4,
      name: "Plain console with teak mirror",
      price: "Rs. 25,000.00",
      image: "/images/top-p4.png",
    },
  ];


  return (
    <>
    <div className="max-w-[1440px] h-auto lg:h-[820px] mx-auto px-4 lg:px-0">
      <div className="max-w-[1241.01px] h-auto lg:h-[730.87px] m-auto mt-11 bg-white flex flex-col lg:flex-row lg:justify-between">
        {/* Left Section */}
        <div className="w-full lg:w-[553px] flex flex-row">
          {/* Image Thumbnails */}
          <div className="w-[76px] hidden lg:flex flex-col items-center ">
            {["/images/asgaa-l1.png", "/images/asgaa-l2.png", "/images/asgaa-l3.png", "/images/asgaa-l4.png"].map((src, idx) => (
              <div
                key={idx}
                className="w-[60px] h-[60px] bg-[#FFF9E5] mb-4 last:mb-0"
              >
                <Image
                  src={src}
                  alt={`Image ${idx + 1}`}
                  width={60}
                  height={60}
                  className="object-cover rounded-md"
                />
              </div>
            ))}
          </div>

          {/* Main Image */}
          <div className="w-full lg:w-[481px] flex justify-center bg-white">
            <div className="w-[90%] lg:w-[423px] h-[300px] lg:h-[500px] bg-[#FFF9E5] rounded-md relative">
              <Image
                src="/images/Asgaard sofa 1.png"
                alt="Sofa"
                layout="fill"
                objectFit="contain"
                className="rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[606.01px] h-auto lg:h-[730.87px] mt-8 lg:mt-0">
          {/* Title and Price */}
          <div>
            <h1 className="text-[24px] lg:text-[42px]">Asgaard sofa</h1>
            <h2 className="text-[18px] lg:text-[24px]">Rs. 250,000.00</h2>
          </div>

          {/* Rating */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-14 mt-3">
            <button className="flex flex-row gap-2">
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStar className="text-yellow-300" />
              <FaStarHalf className="text-yellow-300" />
            </button>
            <button
              className="border-l-2 hidden sm:block"
              style={{ borderColor: "#9F9F9F" }}
            >
              <p className=" text-[#7F7F7F] py-2 px-4 rounded-md text-[13px]">
                5 Customer Review
              </p>
            </button>
          </div>

          {/* Description */}
          <div>
            <p className="text-[13px] mt-4 text-justify">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio which boasts a clear midrange and extended highs for a
              sound.
            </p>
          </div>

          {/* Size */}
          <div>
            <p className="text-[14px] text-[#9F9F9F] mt-5">Size</p>
            <div className="flex flex-row gap-4">
              {["L", "XL", "XS"].map((size, idx) => (
                <div
                  key={idx}
                  className={`w-[30px] h-[30px] flex items-center justify-center rounded-md ${
                    idx === 0 ? "bg-[#FBEBB5]" : "bg-[#FAF4F4]"
                  }`}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Color */}
          <div>
            <p className="text-[14px] text-[#9F9F9F] mt-5">Color</p>
            <div className="flex flex-row gap-4">
              {["#816DFA", "#000000", "#CDBA7B"].map((color, idx) => (
                <div
                  key={idx}
                  className="w-[30px] h-[30px] rounded-full"
                  style={{ backgroundColor: color }}
                ></div>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex flex-col sm:flex-row mt-8 gap-4 sm:gap-10">
            <button className="flex flex-row px-6 py-4 rounded-xl border-[1px] border-[#9F9F9F] gap-6 text-[16px]">
              <p>-</p>
              <p>1</p>
              <p>+</p>
            </button>

  {/* Add to Cart Button */}
  <button
        className="px-10 py-4 rounded-xl border-[1px] border-black"
        onClick={() => setShowCartBox(!showCartBox)}
      >
        Add To Cart
      </button>

      {/* Cart Box */}
      {showCartBox && (
        <div className="fixed left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] w-[90%] sm:w-[417px] h-[90%] sm:h-[746px] bg-[#FFFFFF] z-50 rounded-lg shadow-lg p-6">
  {/* Shopping Cart Header */}
  <div className="absolute top-[28px] left-[30%] transform -translate-x-[50%] w-[177px] h-[36px] text-[#000000] bg-[#FFFFFF] flex items-center justify-between p-2">
  <div className="font-[Poppins] font-[600] text-[24px] leading-[36px] whitespace-nowrap">
    <h2>Shopping Cart</h2>
    <div className="absolute top-[150%] left-[8] w-[287px] border-t-[1px] border-[#D9D9D9]">
    <div className="top-[132px] pt-[30px]  mb-[-150px] left-[1050px] w-[108px] h-[105px]">
  <img src="/images/shopping-cart.png" alt="Picture" className=" h-full object-cover" />
</div>
  </div>
  </div>


  <div className="absolute top-[10px] left-[160%] sm:left-[160%] md:left-[160%] lg:left-[160%px] w-[16.63px] h-[19px] flex items-center justify-center">
  <RxLockClosed size={16.63} color="#9F9F9F" />
</div>

<button
  className="absolute top-[120px] left-[160%] sm:left-[160%] lg:left-[160%] w-[20px] h-[20px] text-[#9F9F9F] flex items-center justify-center"
  onClick={() => setShowCartBox(false)}
>
  <IoIosCloseCircle size={20} />
</button>
    <div className="absolute top-[100px] left-[95%] transform -translate-x-[50%] w-[108px] h-[24px] text-[#000000] flex items-center justify-center">
  <p className="font-[Poppins] font-[400] text-[16px] leading-[24px]">
    Asgaard sofa
  </p>
  </div> 
 <div className="absolute top-[129px] left-[1190px] sm:left-[66%] md:left-[66%] lg:left-[1190px] w-[5px] h-[24px] font-[Poppins] font-[300] text-[16px] leading-[24px] text-[#000000]">
  <p className='sm:pr-[15px] md:pr-[10px]'>
    1
  </p>
</div>

<div 
  className="absolute top-[132px] left-[1210px] sm:left-[82%] md:left-[82%] lg:left-[1210px] w-[8px] h-[18px] font-[Poppins] font-[300] text-[12px] leading-[18px] text-[#000000]">
  <p className='sm:pr-3 md:pr-2'>
    X
  </p>
</div>

<div className="absolute top-[35px] left-[1233px] sm:left-[40%] md:left-[40%] lg:left-[1233px] w-[87px] h-[18px] font-[Poppins] font-[500] text-[12px] leading-[18px] text-[#B88E2F]">
  <p className='pt-24 pl-[165px] sm:pl-[80px] md:pl-[100px]'>
    Rs.250,000.00
  </p>
</div>
<div 
  className="absolute top-[580px] left-[5%] sm:left-[5%] md:left-[5%] lg:left-[5%] w-[131px] h-[31px] text-[#000000] font-[Poppins] font-[400] text-[16px] leading-[24px] flex items-center justify-center "
>
  Subtotal
</div>

<div 
  className="absolute top-[580px] left-[5%] sm:left-[105%] md:left-[105%] lg:left-[105%] w-[131px] h-[31px] text-[#B88E2F] font-[Poppins] font-[400] text-[16px] leading-[24px] flex items-center justify-center "
>
Rs. 250,000.00
</div>
<div 
  className="absolute top-[621px] left-[5%] sm:left-[5%] md:left-0 lg:left-[5%] w-[70%] sm:w-[350px] h-[1px] border-[1px] border-[#D9D9D9]"
></div>
{/* Left Side Button */}
<a 
  href="/cart" 
  className="absolute top-[650px] left-[5%] sm:left-[15%] md:left-[15%] lg:left-[15%] w-[131px] h-[31px] text-[#000000] font-[Poppins] font-[400] text-[12px] leading-[18px] flex items-center justify-center border-[1px] border-[#000000] rounded-[50px]"
>
  View Cart
</a>

{/* Right Side Button */}
<a 
  href="/checkout" 
  className="absolute top-[650px] left-[5%] sm:left-[105%] md:left-[105%] lg:left-[105%] w-[131px] h-[31px] text-[#000000] font-[Poppins] font-[400] text-[12px] leading-[18px] flex items-center justify-center border-[1px] border-[#000000] rounded-[50px]"
>
  Checkout
</a>
</div>
</div>
)
}

</div>   
   
          {/* Divider */}
          <hr className="w-full sm:w-[601px] border-t-[2px] border-[#dbd8d8] mt-10" />
         

          {/* Additional Details */}
          <div className="mt-9 space-y-3">
            {[
              ["SKU", ":SKU001"],
              ["Category", ": Sofas"],
              ["Tags", ":Sofa, Chair, Home, Shop"],
            ].map(([label, value], idx) => (
              <div
                key={idx}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4"
              >
                <p className="text-[16px] text-[#9F9F9F]">{label}</p>
                <p className="text-[16px] text-[#9F9F9F]">{value}</p>
              </div>
            ))}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
              <p className="text-[16px] text-[#9F9F9F]">Share</p>
              <div className="flex flex-row gap-2 text-[23px] text-black">
                <MdFacebook />
                <RxLinkedinLogo />
                <AiFillTwitterCircle />
                <div className="w-32  flex justify-end text-red-600">
                  <IoIosHeartEmpty />
                  </div>
                 
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
       
    <div className="max-w-[1440px] h-auto flex flex-col border-t-2 border-[#9F9F9F]">
      {/* Parent container with vertical alignment */}
      <div className="flex items-center justify-start flex-col w-full h-auto m-auto">
        {/* Top buttons */}
        <div className="w-[90%] sm:w-[70%] md:w-[50%] h-auto p-4 mt-7 flex flex-col sm:flex-row justify-between gap-4">
          <button className="w-full sm:w-[136px] h-[36px] text-[18px] sm:text-[24px]">Description</button>
          <button className="w-full sm:w-[239px] h-[36px] text-[18px] sm:text-[24px] text-[#9F9F9F] text-nowrap">
            Additional Information
          </button>
          <button className="w-full sm:w-[136px] h-[36px] text-[18px] sm:text-[24px] text-[#9F9F9F] text-nowrap">
            Reviews [5]
          </button>
        </div>
        {/* Content section */}
        <div className="flex flex-col items-center sm:flex-row justify-center w-[90%] sm:w-[1026px] h-auto p-4 text-left bg-white mt-4">
          <div className="space-y-3 leading-relaxed text-[14px] sm:text-[16px] text-justify">
            <p>
              Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the
              unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
            </p>
            <p>
              Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the
              bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a
              well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate
              and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while
              the guitar-influenced leather strap enables easy and stylish travel.
            </p>
          </div>
        </div>
        {/* Images Section */}
        <div className="w-full flex flex-col sm:flex-row gap-6 p-4 mt-4">
          <div className="w-full sm:w-[45%] h-auto">
            <Image src="/images/addinfo1.png" alt="image" width={600} height={600} className="w-full h-auto object-cover" />
          </div>
          <div className="w-full sm:w-[45%] h-auto">
            <Image src="/images/addinfo2.png" alt="image" width={600} height={600} className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>

     {/* Top Picks Section */}


   
     <div className="max-w-[1440px] min-h-[800px] ">
  {/* Section Header */}
  <div className="flex flex-col items-center text-center">
    <p className="font-[500] text-[36px] leading-[54px] mt-20">
    Related Products
    </p>
  </div>

  {/* Image Grid */}
  <div>
    <div className="flex justify-center">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 px-4 sm:px-6">
        {details.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-gray-600 mt-2">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* View More Button */}
    <div className="flex justify-center mt-28">
      <Link href='/Shop'>
      <p className="underline underline-offset-8 mt-2 cursor-pointer font-[500] text-[16px] transition-transform hover:scale-105 hover:text-gray-700">
        View More
      </p>
      </Link>
    </div>
  </div>
</div>

                  
     </>         
  );
};

export default Details;