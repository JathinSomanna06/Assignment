import React from 'react'
import { useState, useEffect } from 'react';

export const Productcard = ({ image, name, price, description }) => {
  const [currentIndex, setCurrentIndex] = useState(0); // Corrected useState usage

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % image.length);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [image]);

  const currentImage = image[currentIndex]; // Corrected variable name
  return (
    <div className="bg-neutral-200 p-4 rounded-lg shadow-md flex justify-between flex-col">
      <div className='w-full'>
        <img src={currentImage} alt={name} className='w-full h-56 object-cover rounded-lg mb-2'/> {/* Corrected image source */}
        <h1 className='text-lg font-bold'>{name}</h1>
        <h3 className='text-sm opacity-50 line-clamp-2'>{description}</h3>
      </div>
      <div className='w-full'>
        <h1 className='text-lg font-bold my-2'>${price}</h1>
        <button className='w-full text-white px-4 py-2 rounded-md bg-neutral-900'>Buy Now</button>
      </div>
    </div>
  );
}