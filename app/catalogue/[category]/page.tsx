import { loadCategories, loadCategoryBySlug } from '@/app/lib/data';
import CategoriesMenu from '@/app/ui/CategoriesMenu';
import Breadcrumbs from '@/app/ui/Breadcrumbs';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/Search';
import { notFound } from 'next/navigation';
import Pagination from '@/app/ui/Pagination';

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const categorySlug = params.category;
  const category = await loadCategoryBySlug(`/${categorySlug}`);
  const categories = await loadCategories();

  if (!category) {
    notFound();
  } else {
    console.log(category);
  }
  return (
    <main className="flex min-h-screen flex-col bg-white bg-white p-24">
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Catalogue', href: '/catalogue' },
          {
            label: category.name,
            href: `/catalogue/${categorySlug}`,
            active: true,
          },
        ]}
      />
      <div className="flex flex h-full w-full flex-col gap-10">
        <Search placeholder="Rechercher des morceaux..." />
        <div className="flex h-full w-full flex-col gap-10 md:flex-row">
          <CategoriesMenu
            categories={categories}
            activeCategory={category.name}
          />
          <div className="flex flex h-full flex-col md:w-3/5 lg:w-8/12 xl:w-4/5">
            <h2 className={`${lusitana.className} flex text-xl md:text-2xl`}>
              Morceaux
            </h2>
          </div>
        </div>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={10} />
        </div>
      </div>
    </main>
  );
}
