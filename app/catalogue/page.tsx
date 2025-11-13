import { loadCategories, loadTracks } from '@/app/lib/data';
import Search from '@/app/ui/Search';
import CategoriesMenu from '@/app/ui/CategoriesMenu';
import Pagination from '@/app/ui/Pagination';
import { Track as TrackLine } from '../ui/Track';
import PlayerProvider from '../hooks/PlayerProvider';
import { AiFillWarning } from 'react-icons/ai';

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; page?: string; categorie?: string }>;
}) {
  const categories = await loadCategories();
  const params = await searchParams;

  const categorie = params?.categorie || 'Toutes';
  const query = params?.query || '';
  const currentPage = Number(params?.page) || 1;
  const { tracks, totalPages } = await loadTracks({
    query,
    currentPage,
    category: categorie !== 'Toutes' ? categorie : null,
  });

  if (!tracks || !totalPages) {
    return (
      <main className="flex min-h-screen flex-col bg-white pt-6 lg:pt-12">
        <div className="mx-auto max-w-4xl px-6 md:px-16 lg:px-24">
          <div className="flex items-center gap-3 rounded bg-yellow-50 p-6">
            <AiFillWarning className="h-6 w-6 text-yellow-800" />
            <p className="text-yellow-800">
              Le contenu est temporairement indisponible.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <div className="flex flex h-full w-full flex-col gap-10">
        <div className="flex h-full w-full flex-col gap-6 md:flex-row">
          <CategoriesMenu
            categories={categories.filter((c) => c.name !== 'Nouveautés')}
            activeCategory={categorie}
          />
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
