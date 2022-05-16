import React from 'react';

const SearchItem = () => {
  return (
    <div className='border-[1px] border-zinc-400 p-3 rounded-sm flex justify-between gap-5 mb-5'>
      <img
        src='https://cf.bstatic.com/xdata/images/hotel/square600/259179629.webp?k=2b5b102ed36a4c22cda043727f716f0302bd7416a10a205de94246a79c76a33e&o=&s=1'
        alt='residence-img'
        className='w-52 h-52 object-cover rounded-sm'
      />
      <div className='flex flex-col gap-2.5 basis-2/3'>
        <h1 className='text-xl text-activeBlue font-bold'>
          Tower Street Apartments
        </h1>
        <span className='text-xs'>500m from center</span>
        <span className='text-xs bg-green text-white max-w-max p-1 rounded-md'>
          Free airport taxi
        </span>
        <span className='text-xs font-bold'>
          Studio Apartment with Air conditioning
        </span>
        <span className='text-xs'>
          Entire studio · 1 bathroom · 21m² 1 full bed
        </span>
        <span className='text-green text-xs font-bold'>Free cancellation</span>
        <span className='text-green text-xs'>
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className='basis-1/3 flex flex-col justify-between'>
        <div className='flex justify-between items-center'>
          <h2 className='font-semibold'>Excellent</h2>
          <button className='bg-primary text-white border-none px-1 py-[2px] font-bold'>
            8.9
          </button>
        </div>
        <div className='text-right items-end flex flex-col gap-1'>
          <h2 className='text-2xl'>$125</h2>
          <h2 className='text-xs text-gray'>Includes taxes and fees</h2>
          <button className='bg-activeBlue text-white font-semibold py-2 px-4 border-none cursor-pointer rounded-sm max-w-max'>
            See availability <span className='ml-1 font-normal'>&gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
