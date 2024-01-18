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
    <nav className="w-full bg-yellow-500 shadow">
      <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
        <div>
          <div className="flex items-center justify-between py-3 md:block md:py-5">
            <a href="#" className="flex items-center justify-between gap-2">
              <GiMusicalNotes className="h-10 w-10 text-white" />
              <h1
                className={`${lusitana.className} text-3xl font-bold text-white`}
              >
                Ivan Mur - Arrangements musicaux
              </h1>
            </a>
            <div className="md:hidden">
              <button
                className="rounded-md p-2 text-gray-700 outline-none focus:border focus:border-gray-400"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <RxCross1 className="text-white" />
                ) : (
                  <AiOutlineMenu className="text-white" />
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
                <li key={index} className="text-white">
                  {submenu.length > 0 ? (
                    <Dropdown
                      name={name}
                      slug={slug}
                      dropdownItems={submenu.sort((a, b) => a.order - b.order)}
                    />
                  ) : (
                    <Link href={`${slug}`}>{name}</Link>
                  )}
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
