import Link from 'next/link';
import { lusitana } from './ui/fonts';
import { Button } from './ui/Button';
import { loadIndexData, loadNouveautes } from './lib/data';
import Image from 'next/image';
import { AiFillWarning } from 'react-icons/ai';

export default async function Page() {
  const data = await loadIndexData();
  const nouveautes = await loadNouveautes();
  return (
    <main className="flex min-h-screen flex-col bg-white pt-6 lg:pt-12">
      <div className="flex flex-col gap-10 px-6 md:px-16 lg:gap-20 lg:px-24 xl:flex-row">
        <div className="flex flex-col">
          <Image
            className="h-80 w-full rounded object-cover object-top"
            src={data.image.url}
            alt={data.image.alt}
            width={550}
            height={700}
            priority
          />
        </div>
        <div className="flex flex-col gap-6 xl:w-2/3">
          <h1 className={`${lusitana.className} text-2xl font-bold`}>
            {data.title}
          </h1>
          <p className={`md:text-1xl text-lg text-gray-800 md:leading-normal`}>
            {data.text[0].item}
          </p>
          <p className={`md:text-1xl text-lg text-gray-800 md:leading-normal`}>
            {data.text[1].item}
          </p>
          <div>
            <Link href="/catalogue">
              <Button className="mt-4 w-auto justify-center">
                Catalogue complet
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-4 flex grow flex-col gap-6 px-6 py-4 md:px-16 lg:px-24 lg:py-4">
        <div className="flex items-center gap-3 rounded-lg bg-red-600 px-4 py-4 text-white">
          <div className="flex h-5 w-5 items-center">
            <AiFillWarning />
          </div>
          <p>
            Attention : changement de coordonnées bancaires, me consulter avant
            toute commande afin d&apos;avoir le nouveau RIB
          </p>
        </div>
      </div>
      <div className="mt-8 flex grow flex-col gap-6 bg-yellow-400 px-6 py-6 md:px-16 lg:px-24 lg:py-12">
        <div className="flex items-center gap-4">
          <h2 className={`${lusitana.className} text-2xl font-bold`}>
            Nouveautés à la une
          </h2>
        </div>
        <div className="mt-6 flex flex-col gap-10 md:grid md:grid-cols-5">
          {nouveautes.map(({ id, author, name }) => (
            <div className="flex flex-col gap-2 rounded bg-white" key={id}>
              <div className="flex flex-col gap-2 p-6">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-gray-600">{author}</p>
              </div>
            </div>
          ))}
        </div>
        <div>
          <Button className="mt-4 w-auto justify-center">
            <Link href={`/catalogue?categorie=Nouveautés`}>
              Toutes les nouveautés
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
