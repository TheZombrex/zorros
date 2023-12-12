import React from 'react';
import Icon from '@mdi/react';
import { mdiCheckboxMarked, mdiCloseBox } from '@mdi/js';
import GreenButton from './GreenButton';
import { wrap } from 'module';
const PricingCard = ({ title, price, items_value }: { title: string, price: string, items_value: string }) => {
    const parsedItemsValues = JSON.parse(items_value);
    const items_name = ["Fotos exclusivas", "Cámaras en vivo", "Peluche especial", "Visita guiada gratuita al refugio"]

    return (
        <div className='flex flex-col justify-center items-center p-[3rem] bg-white rounded-lg m-5'>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@mdi/font@7.3.67/css/materialdesignicons.min.css" />
            <div className='flex flex-col mt-5'>
                <h2 className='text-center text-xl font-bold'>{title}</h2>
                <h3 className='text-center text-lg font-semibold'>{price}</h3>
            </div>
            <div className='mt-[2em] p-2 border-t border-slate-600 border-spacing-5'>
                <ul className='text-lg'>
                    {parsedItemsValues.map((items_value: string, index: number) => (
                        <li key={index} style={{ height: '3em' }} className='text-left flex justify-between gap-2'>
                            <span className='text-wrap-balance'>{items_name[index]}</span>
                            {items_value ? (
                                <span className="mdi mdi-checkbox-marked text-green-500 text-2xl"></span>

                            ) : (
                                <span className="mdi mdi-close-box text-red-500 text-2xl"></span>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
            <GreenButton
                buttonName="Adoptar ahora"
                buttonHref="#"
            />
        </div >
    );
};

export default PricingCard;
