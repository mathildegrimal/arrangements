'use client';
import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { GiMusicalNotes } from 'react-icons/gi';
import Link from 'next/link';
import { MenuItem } from '@/app/lib/definitions';
import { lusitana } from '../fonts';
import Dropdown from './Dropdown';
const Navbar = ({ menuItems }: { menuItems: MenuItem[] }) => {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white">
      <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <a href="#" className="flex items-center justify-between gap-2">
              <GiMusicalNotes className="h-10 w-10 text-red-600" />
              <div className="flex flex-col">
                <p className={`${lusitana.className} text-3xl font-bold`}>
                  Ivan Mur
                </p>
                <p className="text-1xl">Arrangements musicaux</p>
              </div>
            </a>
            <div className="md:hidden">
              <button
                className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <RxCross1 className="text-red-600" />
                ) : (
                  <AiOutlineMenu className="text-red-600" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`mt-8 flex-1 justify-self-center pb-3 md:mt-0 md:block md:pb-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              {menuItems.map(({ name, slug, submenu }, index) => (
                <li key={index} className="font-semibold text-red-600">
                  <Link href={`${slug}`} onClick={() => setNavbar(!navbar)}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
