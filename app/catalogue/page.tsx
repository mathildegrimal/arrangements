import { loadCategories } from '@/app/lib/data';
import Search from '@/app/ui/Search';
import { lusitana } from '@/app/ui/fonts';
import CategoriesMenu from '@/app/ui/CategoriesMenu';
import Breadcrumbs from '@/app/ui/Breadcrumbs';
import Pagination from '@/app/ui/Pagination';

export default async function Page() {
  const categories = await loadCategories();
  return (
    <main className="bg-whites flex h-full min-h-screen flex-col bg-white p-24">
      <Breadcrumbs breadcrumbs={[{ label: 'Catalogue', href: '/catalogue' }]} />
      <div className="flex flex h-full w-full flex-col gap-10">
        <Search placeholder="Rechercher des morceaux..." />
        <div className="flex h-full w-full flex-col gap-10 md:flex-row">
          <CategoriesMenu categories={categories} activeCategory="" />
          <div className="flex flex h-full flex-col md:w-3/5 lg:w-8/12 xl:w-4/5">
            <h2 className={`${lusitana.className} flex text-xl md:text-2xl`}>
              Morceaux
            </h2>
          </div>
        </div>
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={10} />
      </div>
    </main>
  );
}
