import Link from 'next/link';
import { lusitana } from './ui/fonts';
import Image from 'next/image';
export default function Page() {
  return (
    <main className="bg-whites flex min-h-screen flex-col bg-white p-24">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <p
            className={`${lusitana.className} text-xl text-gray-800 md:text-2xl md:leading-normal`}
          >
            Vous faites partie d&apos;une fanfare, une banda, une peña, ou
            encore une harmonie ?
            <br />
            <br />
            Vous cherchez à moderniser et étoffer votre répertoire grâce à de
            nouvelles partitions ? Vous trouverez sur ce site tout ce qu&apos;il
            faut pour vous aider dans cette tache !
            <br />
            <br />
            Musicien exerçant dans une fanfare depuis plusieurs années, je
            réalise pour mon groupe la plupart des arrangements musicaux. Je
            souhaite aider les groupes musicaux à garnir leur répertoire en leur
            faisant profiter de mon expérience.
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/pexels-ylanite-koppens-934067.jpg"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="partition"
          />
        </div>
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row"></div>
    </main>
  );
}
