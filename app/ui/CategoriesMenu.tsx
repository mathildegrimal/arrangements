import { lusitana } from './fonts';
import Link from 'next/link';
import { Category } from '../lib/definitions';
import clsx from 'clsx';
import Breadcrumbs from './Breadcrumbs';

export default function CategoriesMenu({
  categories,
  activeCategory,
}: {
  categories: Category[];
  activeCategory: { name: string; slug: string | null };
}) {
  return (
    <div className="flex flex h-full w-full flex-col gap-4 md:w-2/5 lg:w-4/12 xl:w-1/5">
      <Breadcrumbs
        breadcrumbs={[
          {
            label: activeCategory.name,
            href: activeCategory.slug
              ? `/catalogue${activeCategory.slug}`
              : `/catalogue`,
            active: true,
          },
        ]}
      />
      <ul className="text-1xl flex flex-col gap-1">
        {categories.map(({ name, slug }, index) => (
          <li
            key={index}
            className={clsx(
              activeCategory.slug === slug ? 'hidden' : 'text-gray-500',
            )}
          >
            <Link href={`/catalogue${slug}`}>{name}</Link>
          </li>
        ))}
        {activeCategory.name === 'Toutes' ? (
          <></>
        ) : (
          <li className="text-gray-500">
            <Link href={`/catalogue`}>Toutes les categories</Link>
          </li>
        )}
      </ul>
    </div>
  );
}
