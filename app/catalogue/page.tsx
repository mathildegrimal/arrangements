import { loadCategories, loadTrackAudio, loadTracks } from '@/app/lib/data';
import Search from '@/app/ui/Search';
import { lusitana } from '@/app/ui/fonts';
import CategoriesMenu from '@/app/ui/CategoriesMenu';
import Breadcrumbs from '@/app/ui/Breadcrumbs';
import Pagination from '@/app/ui/Pagination';
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';
import { Track } from '../lib/definitions';
import { Track as TrackLine } from '../ui/Track';

export default async function Page({
  searchParams,
}: {
  searchParams: { query?: string; page?: string };
}) {
  const categories = await loadCategories();

  const query = searchParams?.query || '';
  const currentPage = Number(searchParams?.page) || 1;
  const { tracks, totalPages } = await loadTracks({ query, currentPage });

  return (
    <main className="bg-whites flex h-full min-h-screen flex-col bg-white p-12 md:p-16 lg:p-24">
      <div className="flex flex h-full w-full flex-col gap-10">
        <div className="flex h-full w-full flex-col gap-10 md:flex-row">
          <CategoriesMenu
            categories={categories}
            activeCategory={{ name: 'Toutes', slug: null }}
          />
          <div className="flex flex h-full flex-col gap-8 md:w-3/5 lg:w-8/12 xl:w-4/5">
            <Search placeholder="Rechercher des morceaux..." />
            <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
              <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"></thead>
              <tbody>
                {tracks.map((track, index) => (
                  <TrackLine key={index} {...track} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </main>
  );
}
