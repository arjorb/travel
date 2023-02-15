import React from 'react';

const Card = () => {
  return (
    <>
      <div className='flex gap-5'>
        <img src='./image.png' alt='cover image' />
        <div>
          <div className='flex gap-5 items-center my-2'>
            <div className='flex gap-1 items-center'>
              <img src='./location.svg' alt='location' />
              <p className='text-xs'>JAPAN</p>
            </div>
            <p className='text-xs text-gray-400 underline cursor-pointer'>View on Google Maps</p>
          </div>
          <h1 className='text-2xl font-semibold mb-2'>Mount Fuji</h1>
          <div className='text-sm font-semibold my-2'>
            <span>12 Jan, 2021 - </span>
            <span>24 Jan, 2021</span>
          </div>
          <p className='text-xs'>
            Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the
            single most popular tourist site in Japan, for both Japanese and foreign tourists.
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
