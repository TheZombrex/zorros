'use client'
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@mdi/react';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { mdiMenu, mdiCheck } from '@mdi/js';
import GreenButton from '../src/components/GreenButton';
import LargeCard from '../src/components/LargeCard';
import SquareCard from '../src/components/SquareCard';
import PricingCard from '../src/components/PricingCard';


const Page = () => {
  useEffect(() => {
    const handleMenuButtonClick = (event: { preventDefault: () => void; }) => {
      event.preventDefault();
      const menu = document.getElementById('menu');

      if (menu) {
        menu.classList.toggle('hidden');

        if (!menu.classList.contains('hidden')) {
          menu.classList.add('fixed', 'w-full', 'bg-white', 'top-[6em]', 'text-center');
        } else {
          menu.classList.remove('fixed', 'w-full', 'bg-white', 'top-[6em]', 'text-center');
        }
      }
    };

    const handleWindowResize = () => {
      const menu = document.getElementById('menu');

      if (menu && window.innerWidth > 768 && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
        menu.classList.remove('fixed', 'w-full', 'bg-white', 'top-[6em]', 'text-center');
      }
    };

    const menuButton = document.getElementById('menu-button');
    if (menuButton) {
      menuButton.addEventListener('click', handleMenuButtonClick);
      window.addEventListener('resize', handleWindowResize);

      return () => {
        menuButton.removeEventListener('click', handleMenuButtonClick);
        window.removeEventListener('resize', handleWindowResize);
      };
    }
  });
  return (
    <>
      <header>
        <title>Fox Conservation Center</title>
        <meta name="description" content="Somos una organización comprometida con la preservación de la vida silvestre, centrada en la conservación y protección de los zorros en su hábitat natural. Nuestra misión es asegurar un entorno seguro y sostenible para estos cautivadores animales, fomentando su bienestar y la coexistencia armoniosa con el ecosistema circundante. A través de programas de adopción, educación ambiental y acciones de conservación, trabajamos incansablemente para garantizar un futuro próspero para los zorros y su entorno, promoviendo la conciencia y el cuidado responsable de la vida salvaje." />
      </header>
      <main className="flex min-h-screen flex-col">
        <header className="h-[6em] lg:px-16 px-0 bg-white flex flex-wrap items-center py-4 shadow-md z-[99]">
          <div className="flex-1 flex justify-between items-center">
            <a href="#" aria-label="Logo de la organización"><img src="images/logo.avif" alt="" className="w-[4rem] h-[4rem] object-contain"></img></a>
          </div>
          <div className="hidden p-[5em] md:p-0 md:flex md:flex-col md:items-center md:w-auto w-full" id="menu">
            <nav>
              <ul className="md:flex items-center justify-between text-base text-black pt-4 md:pt-0 mx-0 font-bold">
                <li><a className="md:p-4 py-3 px-0 block hover:text-[#618c24]/80" href="#">Inicio</a></li>
                <li><a className="md:p-4 py-3 px-0 block hover:text-[#618c24]/80" href="#">Sobre Nosotros</a></li>
                <li><a className="md:p-4 py-3 px-0 block hover:text-[#618c24]/80" href="#">Adopta a un zorro</a></li>
                <li><a className="md:p-4 py-3 px-0 block hover:text-[#618c24]/80" href="#">Galería</a></li>
                <li><a className="md:p-4 py-3 px-0 block hover:text-[#618c24]/80" href="#">En vivo</a></li>
              </ul>
            </nav>

          </div>
          <div className="flex-3 flex justify-between items-center">
            <a className="md:p-4 py-3 block hover:text-[#618c24]/80 px-2 font-bold" href="#">Mi Cuenta</a>
            <a className="md:p-4 py-3 px-0 block hover:text-[#618c24]/80" href="#" aria-label="Bandera del idioma">
              <img src="images/icons/spain-flag.avif" className="w-5 h-5 object-contain" alt=""></img>
            </a>
          </div>
          <a href="#" id="menu-button" className="block md:hidden lg:hidden mx-5 text-4xl text-black hover:text-[#618c24]/80"><Icon path={mdiMenu} size={1} /></a>
        </header>
        <section className='flex flex-col bg-cover bg-[url(https://thezombrex.github.io/zorros/images/bg.avif)] w-screen h-screen'>
          <div className="px-4 mx-auto max-w-7xl my-[20vh] sm:px-6 lg:px-8 z-10">
            <div className="text-center">
              <h1
                className="max-w-4xl mx-auto mb-4 text-4xl font-bold leading-tight text-white sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight">
                FOX CONSERVATION CENTER
              </h1>
              <h2 className="max-w-2xl mx-auto px-6 text-3xl font-bold text-white font-inter">
                Conservemos su hogar, <br />protejamos su futuro.
              </h2>
              <div className="px-8 sm:items-start sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9 z-10">
                <GreenButton
                  buttonName="¿Cómo ayudar?"
                  buttonHref="#"
                />

              </div>
            </div>
          </div>
          <div className='flex flex-row justify-between items-end px-10 absolute w-screen h-screen bottom-0 pointer-events-none overflow-x-hidden z-0'>
            <img src="images/hero-image.avif" alt="" className='min-w-50 max-w-1/2 h-1/3 lg:h-1/2 object-contain pointer-events-none z-0' />
            <img src="images/hero-image2.avif" alt="" className='min-w-1/2 h-1/3 lg:h-1/2 object-contain pointer-events-none z-0' />
          </div>
        </section>
        <section className='flex flex-col bg-[#121212]'>
          <div className='mx-auto my-5 p-5 justify-center items-center text-white bg-[#222222] w-[90%] rounded-xl max-w-[1200px]'>
            <LargeCard
              title="ADOPTA A UN ZORRO"
              description="¡Adopta un zorro y únete a nuestra causa de conservación! 
            Con tu suscripción, recibirás fotos exclusivas, acceso a una 
            cámara en vivo las 24 horas para seguir su día a día y un 
            adorable peluche como agradecimiento por tu apoyo. Sé parte 
            activa en la protección de estos majestuosos animales en nuestra 
            reserva natural."
              imageSrc="images/card1-fox.avif"
              buttonName="Ver Precios"
              buttonHref="#"
              hasButton={true}
            />
          </div>
          <div className='mx-auto my-5 p-5 justify-beteen items-center text-white bg-[#222222] w-[90%] rounded-xl max-w-[1200px]'>
            <LargeCard
              title="¿POR QUÉ ADOPTAR?"
              description="Al adoptar un zorro, sostienes su cuidado diario y el funcionamiento 
            del refugio. Tu contribución cubre gastos vitales como alimentación, 
            limpieza y vigilancia, asegurando un ambiente seguro para estos 
            animales en nuestra reserva protegida."
              imageSrc="images/card2-fox.avif"
              buttonName=""
              buttonHref=""
              hasButton={false}
            />
          </div>
          <div className='mx-auto my-5 p-5 justify-beteen items-center text-white bg-[#222222] w-[90%] rounded-xl max-w-[1200px]'>
            <LargeCard
              title="¿PUEDO ADOPTAR A MÁS DE UNO?"
              description="¡Por supuesto! Puedes adoptar a tantos zorros como desees, 
            cada uno con su propia suscripción independiente y pago 
            correspondiente. Cada adopción adicional amplía tu apoyo, 
            asegurando la manutención y cuidado individual de cada zorro 
            en nuestra reserva protegida."
              imageSrc="images/card3-fox.avif"
              buttonName=""
              buttonHref=""
              hasButton={false}
            />
          </div>
        </section>
        <section>
          <h2 className='text-3xl text-center font-bold m-[1.5em]'>CONOCE A NUESTROS ZORROS</h2>
          <div className='wrapper w-[90%] m-auto p-5'>
            <div className='grid grid-cols-1 justify-center items-center gap-4 md:grid-cols-2 lg:grid-cols-4 '>
              <SquareCard
                title="Roxy"
                image="images/grid-fox1.avif"
                linkto="#"
              />
              <SquareCard
                title="Luna"
                image="images/grid-fox2.avif"
                linkto="#"
              />
              <SquareCard
                title="Sombra"
                image="images/grid-fox3.avif"
                linkto="#"
              />
              <SquareCard
                title="Milo"
                image="images/grid-fox4.avif"
                linkto="#"
              />
              <SquareCard
                title="Ginger"
                image="images/grid-fox5.avif"
                linkto="#"
              />
              <SquareCard
                title="Finn"
                image="images/grid-fox6.avif"
                linkto="#"
              />
              <SquareCard
                title="Rusty"
                image="images/grid-fox7.avif"
                linkto="#"
              />
              <SquareCard
                title="Bella"
                image="images/grid-fox8.avif"
                linkto="#"
              />
            </div>
          </div>
        </section>
        <section>
          <div className='wrapper w-[90%] m-auto bg-slate-200 rounded-lg p-5'>
            <div className='grid gap-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 justify-between items-center'>
              <PricingCard
                title="Seguidor de la manada"
                price="2€/mes"
                items_value="[true,false,false,false]"
              />
              <PricingCard
                title="Observador de zorros"
                price="3€/mes"
                items_value="[true,true,false,false]"
              />
              <PricingCard
                title="Defensor de la fauna"
                price="5€/mes"
                items_value="[true,true,true,false]"
              />
              <PricingCard
                title="Miembro de la manada"
                price="7€/mes"
                items_value="[true,true,true,true]"
              />
            </div>
          </div>
        </section>
        <footer>
          <div className='wrapper grid grid-cols-1 lg:grid-cols-2 p-5 items-center'>
            <div className='flex flex-row justify-center items-center mx-auto gap-[3rem]'>
              <div>
                <h2 className='font-bold text-xl mb-4'>Enlaces</h2>
                <ul>
                  <li><a className='text-black/90 font-semibold hover:text-[#618c24]/80' href="#">Inicio</a></li>
                  <li><a className='text-black/90 font-semibold hover:text-[#618c24]/80' href="#">Sobre nosotros</a></li>
                  <li><a className='text-black/90 font-semibold hover:text-[#618c24]/80' href="#">Adopta a un zorro</a></li>
                  <li><a className='text-black/90 font-semibold hover:text-[#618c24]/80' href="#">Galería</a></li>
                  <li><a className='text-black/90 font-semibold hover:text-[#618c24]/80' href="#">En vivo</a></li>
                </ul>
              </div>
              <div className='mx-auto'>
                <h2 className='font-bold text-xl mb-4'>Redes sociales</h2>
                <ul>
                  <li><a className='text-black/90 font-semibold hover:text-[#618c24]/80' href="#">Facebook</a></li>
                  <li><a className='text-black/90 font-semibold hover:text-[#618c24]/80' href="#">Twitter</a></li>
                  <li><a className='text-black/90 font-semibold hover:text-[#618c24]/80' href="#">Mastodon</a></li>
                  <li><a className='text-black/90 font-semibold hover:text-[#618c24]/80' href="#">Instagram</a></li>
                  <li><a className='text-black/90 font-semibold hover:text-[#618c24]/80' href="#">Bluesky</a></li>
                </ul>
              </div>
            </div>
            <div className='mx-auto'>
              <h2 className='font-bold text-xl mb-4'>Colaboradores</h2>
              <ul className='leading-6'>
                <li><a className='text-black/90 font-semibold hover:text-[#618c24]/80' href="#">Fundación Salvemos a los Zorros</a></li>
                <li><a className='text-black/90 font-semibold hover:text-[#618c24]/80' href="#">Amigos de la Vida Silvestre</a></li>
                <li><a className='text-black/90 font-semibold hover:text-[#618c24]/80' href="#">Asociación para la Conservación de la Fauna</a></li>
                <li><a className='text-black/90 font-semibold hover:text-[#618c24]/80' href="#">Alianza por la Protección de los Zorros</a></li>
                <li><a className='text-black/90 font-semibold hover:text-[#618c24]/80' href="#">Red de Reservas Naturales Integrales</a></li>
              </ul>
            </div>
          </div>
          <div className='w-full text-center p-2'>
            <span className='font-semibold'>Copyright © David Fernández Perez, 2023</span>
          </div>

        </footer>
      </main >
    </>
  );
};

export default Page;