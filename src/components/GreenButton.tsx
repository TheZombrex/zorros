import React from 'react';

const GreenButton = ({ buttonName, buttonHref }: { buttonName: string, buttonHref: string }) => {
    return (

        <a href={buttonHref} title=""
            className="mb-3 sm:mb-0 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-[#436119] border-2 border-transparent sm:w-auto rounded shadow-black/70 shadow-md hover:bg-[#75ab29] focus:outline-none text-center"
            role="button">
            {buttonName}
        </a>

    );
};

export default GreenButton;
