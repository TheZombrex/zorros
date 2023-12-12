import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@mdi/react';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { mdiMenu } from '@mdi/js';

const NavComponent = () => {
  useEffect(() => {
    const handleMenuButtonClick = (event: MouseEvent) => {
      const typedEvent = event as unknown as React.MouseEvent<HTMLAnchorElement, MouseEvent>;
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
  }, []);

  return (
    <header className="h-[6em] lg:px-16 px-0 bg-white flex flex-wrap items-center py-4 shadow-md">
      <div className="flex-1 flex justify-between items-center">
        <img src="images/logo.png" alt="" width="4em" height="4em" className="object-contain"></img>
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
        <a className="md:p-4 py-3 block hover:text-[#618c24]/80 px-2" href="#">Mi Cuenta</a>
        <a className="md:p-4 py-3 px-0 block hover:text-[#618c24]/80" href="#">
          <img src="images/icons/spain-flag.webp" className="w-5 h-5 object-contain" alt=""></img>
        </a>
      </div>
      <a href="#" id="menu-button" className="block md:hidden lg:hidden mx-5 text-4xl text-black hover:text-[#618c24]/80"><Icon path={mdiMenu} size={1} /></a>
    </header>
  );
};

export default NavComponent;