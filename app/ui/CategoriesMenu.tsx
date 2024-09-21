import Link from 'next/link';
import { Category } from '../lib/definitions';
import clsx from 'clsx';
import { lusitana } from './fonts';

export default function CategoriesMenu({
  categories,
  activeCategory,
}: {
  categories: Category[];
  activeCategory: string;
}) {
  return (
    <div className="flex flex h-full w-full flex-col gap-4 md:w-2/5 lg:w-4/12 xl:w-1/5">
      <h3
        className={clsx(lusitana.className, 'text-xl text-red-600 md:text-3xl')}
      >
        {activeCategory}
      </h3>
      <ul className="text-1xl flex flex-col gap-1">
        {categories.map(({ name }, index) => (
          <li key={index} className="text-gray-500">
            <Link href={`/catalogue?categorie=${name}`}>{name}</Link>
          </li>
        ))}
        <li className="text-gray-500">
          <Link href={`/catalogue?categories=Toutes`}>
            Toutes les categories
          </Link>
        </li>
      </ul>
    </div>
  );
}
