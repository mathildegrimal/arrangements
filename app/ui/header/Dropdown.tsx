import React from 'react';
import Link from 'next/link';
import { MenuItem } from '@/app/lib/definitions';
const Dropdown = ({
  name,
  dropdownItems,
  slug,
}: {
  name: string;
  slug: string;
  dropdownItems: Omit<MenuItem, 'submenu'>[];
}) => {
  return (
    <div className="dropdown dropdown-hover gap-10">
      <label tabIndex={0} className="">
        <Link href={slug}>{name}</Link>
      </label>
      <ul className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
        {dropdownItems.map(({ name, slug: menuItemSlug }, index) => (
          <li key={index}>
            <Link href={`${slug}${menuItemSlug}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dropdown;
