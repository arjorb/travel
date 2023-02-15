import React from 'react';

const CardItem = props => {
  return (
    <>
      <div className='flex gap-5 mb-10'>
        <img src={props.data.imageUrl} alt='cover image' className='w-32 rounded-md' />
        <div>
          <div className='flex gap-4 items-center my-2'>
            <div className='flex gap-1 items-center'>
              <img src='./location.svg' alt='location' />
              <p className='text-xs'>{props.data.location}</p>
            </div>
            <a
              href={props.data.googleMapsUrl}
              target='_blank'
              className='text-xs text-gray-400 underline cursor-pointer'
            >
              View on Google Maps
            </a>
          </div>
          <h1 className='text-2xl font-semibold mb-2'>{props.data.title}</h1>
          <div className='text-sm font-semibold my-2'>
            <span>{props.data.startDate} - </span>
            <span>{props.data.endDate}</span>
          </div>
          <p className='text-xs'>{props.data.description}</p>
        </div>
      </div>
    </>
  );
};

export default CardItem;
