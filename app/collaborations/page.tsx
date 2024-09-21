import { loadCollaborations } from '../lib/data';
import { lusitana } from '../ui/fonts';
import { VideoCard } from '../ui/VideoCard';
import Image from 'next/image';

export default async function Page() {
  const collaboration = await loadCollaborations();
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
