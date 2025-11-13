import { AiFillWarning } from 'react-icons/ai';
import { loadCollaborations } from '../lib/data';
import { lusitana } from '../ui/fonts';
import { VideoCard } from '../ui/VideoCard';
import Image from 'next/image';

export default async function Page() {
  const collaboration = await loadCollaborations();
  if (!collaboration) {
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
      <div className="flex flex-col gap-10 lg:flex-row">
        <div className="flex flex-col gap-6">
          <Image
            className="h-72 w-full rounded object-cover object-top lg:h-48"
            src={'/heads-of.jpg'}
            alt={'fanfare heads of'}
            width={350}
            height={300}
          />
        </div>
        {/*présentation*/}
        <div className="flex flex-col gap-6 xl:w-2/3">
          <h1 className={`${lusitana.className} text-2xl font-bold`}>
            {collaboration.title}
          </h1>
          <p className={`md:text-1xl text-lg text-gray-800 md:leading-normal`}>
            {collaboration.description}
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-10 xl:flex-row">
        <div className="flex flex-col gap-6">
          <div className="mt-6 flex grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
            {collaboration.items.map(({ id, link, name }) => (
              <VideoCard title={name} link={link} key={id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
