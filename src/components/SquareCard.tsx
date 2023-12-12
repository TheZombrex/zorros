import React from 'react';

const SquareCard = ({ title, image, linkto }) => {
    return (

        <div className='flex flex-col w-100 m-auto'>
            <div>
                <a href={linkto} aria-label={title}><img src={image} alt="" className='w-100 rounded-lg transition-all hover:brightness-150' /></a>
            </div>
            <div>
                <a href={linkto}><p className='text-center font-bold text-xl text-black/100 transition-all hover:text-black/50'>{title}</p></a>
            </div>
        </div>

    );
};

export default SquareCard;
