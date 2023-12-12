import React from 'react';
import GreenButton from './GreenButton';

const LargeCard = ({ title, description, imageSrc, buttonName, buttonHref, hasButton }) => {
  return (
    <div className="card p-5 m-5 gap-5 flex flex-col items-center justify-center text-white md:flex-row lg:flex-row">
      <div className="mt-5 mr-5 flex-shrink-0">
        <img src={imageSrc} alt={title} className="card-image rounded-full max-w-xs" />
      </div>
      <div className="card-content w-[80%] m-5">
        <h2 className="card-title text-3xl font-bold">{title}</h2>
        <p className="card-description mt-3 text-wrap-balance">{description}</p>
        {hasButton && (
          <div className='mt-5'>
            {/* Renderizar el botón si hasButton es true */}
            <GreenButton
              buttonName={buttonName}
              buttonHref={buttonHref}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default LargeCard;
