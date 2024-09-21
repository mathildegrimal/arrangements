import { loadCategories, loadTracks } from '@/app/lib/data';
import Search from '@/app/ui/Search';
import CategoriesMenu from '@/app/ui/CategoriesMenu';
import Pagination from '@/app/ui/Pagination';
import { Track as TrackLine } from '../ui/Track';
import PlayerProvider from '../hooks/PlayerProvider';

export default async function Page({
  searchParams,
}: {
  searchParams: { query?: string; page?: string; categorie?: string };
}) {
  const categories = await loadCategories();

  const categorie = searchParams?.categorie || 'Toutes';
  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const { tracks, totalPages } = await loadTracks({
    query,
    currentPage,
    category: categorie !== 'Toutes' ? categorie : null,
  });

  return (
    <>
      <div className="flex flex h-full w-full flex-col gap-10">
        <div className="flex h-full w-full flex-col gap-6 md:flex-row">
          <CategoriesMenu categories={categories} activeCategory={categorie} />
          <div className="flex flex h-full w-full flex-col gap-8 md:w-3/5 lg:w-8/12 xl:w-4/5">
            <Search placeholder="Rechercher des morceaux..." />
            <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"></thead>
              <PlayerProvider>
                <tbody>
                  {tracks.map((track, index) => (
                    <TrackLine key={index} {...track} />
                  ))}
                </tbody>
              </PlayerProvider>
            </table>
          </div>
        </div>
      </div>
      <Pagination totalPages={totalPages} />
    </>
  );
}
