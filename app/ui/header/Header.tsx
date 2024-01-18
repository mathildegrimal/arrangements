import React from 'react';

import { loadMenuItems } from '@/app/lib/data';
import Navbar from './Navbar';
export default async function Header() {
  const { allMenus } = await loadMenuItems();

  return (
    <div>
      <Navbar menuItems={allMenus} />
    </div>
  );
}
