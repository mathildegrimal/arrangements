'use client';
import React, { useContext } from 'react';

import Link from 'next/link';
import { lusitana } from '../fonts';
export default function Footer() {
  return (
    <div
      className={`${lusitana.className} flex w-full items-center justify-around bg-gray-100 py-8 text-red-600`}
    >
      <div className="flex align-middle">
        © Ivan Mur - Tous droits réservés
      </div>
      <div className="flex flex-col gap-2 hover:font-bold">
        <Link href="mentions-legales">Mentions légales</Link>
      </div>
    </div>
  );
}
