import { loadCategories } from '../lib/data';
import Breadcrumbs from '../ui/breadcrumbs';
import Search from '../ui/search';
import { lusitana } from '../ui/fonts';
import CategoriesMenu from '../ui/CategoriesMenu';

export default async function Page() {
  const categories = await loadCategories();
  return (
    <main className="bg-whites flex h-full min-h-screen flex-col bg-white p-24">
      <Breadcrumbs breadcrumbs={[{ label: 'Catalogue', href: '/catalogue' }]} />
      <div className="flex flex h-full w-full flex-col gap-10">
        <Search placeholder="Rechercher des morceaux..." />
        <div className="flex flex flex h-full w-full gap-10">
          <CategoriesMenu categories={categories} activeCategory="" />
          <div className="flex flex h-full w-4/5 flex-col">
            <h2 className={`${lusitana.className} flex text-xl md:text-2xl`}>
              Morceaux
            </h2>
          </div>
        </div>
      </div>
    </main>
  );
}
