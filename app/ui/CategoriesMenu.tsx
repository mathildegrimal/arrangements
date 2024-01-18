import { lusitana } from './fonts';
import Link from 'next/link';
import { Category } from '../lib/definitions';
import clsx from 'clsx';

export default function CategoriesMenu({
  categories,
  activeCategory,
}: {
  categories: Category[];
  activeCategory: string;
}) {
  return (
    <div className="flex flex h-full w-full flex-col gap-10 md:w-2/5 lg:w-4/12 xl:w-1/5">
      <h2 className={`${lusitana.className} md:text-1xl flex text-2xl`}>
        Catégories
      </h2>
      <ul className="text-1xl flex flex-col gap-1">
        {categories.map(({ name, slug }, index) => (
          <li
            key={index}
            className={clsx(
              activeCategory === name ? 'text-gray-900' : 'text-gray-500',
            )}
          >
            <Link href={`/catalogue${slug}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
