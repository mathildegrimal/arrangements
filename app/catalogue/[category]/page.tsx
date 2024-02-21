import { loadCategories, loadCategoryBySlug, loadTracks } from '@/app/lib/data';
import CategoriesMenu from '@/app/ui/CategoriesMenu';
import Breadcrumbs from '@/app/ui/Breadcrumbs';
import { lusitana } from '@/app/ui/fonts';
import Search from '@/app/ui/Search';
import { notFound } from 'next/navigation';
import Pagination from '@/app/ui/Pagination';
import { Track } from '@/app/ui/Track';

export default async function Page({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams: { query?: string; page?: string };
}) {
  const categorySlug = params.category;
  const category = await loadCategoryBySlug(`/${categorySlug}`);
  const categories = await loadCategories();
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const { tracks, totalPages } = await loadTracks({
    query,
    currentPage,
    category,
  });
  if (!category) {
    notFound();
  }
  return (
    <main className="flex min-h-screen flex-col bg-white bg-white p-12 md:p-16 lg:p-24">
      <div className="flex flex h-full w-full flex-col gap-10">
        <div className="flex h-full w-full flex-col gap-10 md:flex-row">
          <CategoriesMenu
            categories={categories}
            activeCategory={{ name: category.name, slug: category.slug }}
          />
          <div className="flex flex h-full flex-col gap-8 md:w-3/5 lg:w-8/12 xl:w-4/5">
            <Search placeholder="Rechercher des morceaux..." />
            <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"></thead>
              <tbody className="bg-white">
                {tracks.map((track, index) => (
                  <Track key={index} {...track} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </main>
  );
}
