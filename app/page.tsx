import Link from 'next/link';
import { lusitana } from './ui/fonts';
import Image from 'next/image';
import { Button } from './ui/Button';
import { Card } from './ui/Card';
export default function Page() {
  return (
    <main className="flex min-h-screen flex-col gap-10 bg-white">
      <div className="mt-16 flex flex-col gap-10 px-6 md:px-16 lg:gap-20 lg:px-24 xl:flex-row">
        <div className="flex flex-col gap-6 xl:w-1/2">
          <h1 className={`${lusitana.className} text-2xl font-bold`}>
            Vous faites partie d&apos;une fanfare, une banda, une peña, ou
            encore une harmonie ?
          </h1>
          <p className={`md:text-1xl text-lg text-gray-800 md:leading-normal`}>
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
          <div>
            <Link href="/catalogue">
              <Button className="mt-4 w-auto justify-center">
                Catalogue complet
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h2 className={`${lusitana.className} text-2xl font-bold`}>
            Exemples de partitions
          </h2>
          <div className="mt-6 flex flex-col gap-10 md:grid md:grid-cols-3">
            <Card
              title="Céline Dion - J'irai où tu iras"
              link={`/`}
              description={`Partition pour piano`}
              action="download"
              image="/pexels-ylanite-koppens-934067.jpg"
            />
            <Card
              title="Générique de Game of Thrones"
              link={`/`}
              description={`Partition pour basse`}
              action="download"
              image="/pexels-ylanite-koppens-934067.jpg"
            />
            <Card
              title="Johhny - Allumer le feu"
              link={`/`}
              description={`Partition pour saxophone`}
              action="download"
              image="/pexels-ylanite-koppens-934067.jpg"
            />
          </div>
        </div>
      </div>
      <div className="mt-8 flex grow flex-col gap-6 bg-yellow-400 px-6 md:px-16">
        <h2 className={`${lusitana.className} mt-8 text-2xl font-bold`}>
          Catégories à la une
        </h2>
        <div className="mt-6 flex flex-col gap-10 md:grid md:grid-cols-3">
          <Card
            title={'Nouveautés'}
            link={`/catalogue/variete-internationale`}
            description={`Retrouvez tous les nouveaux arrangements, comprenant certains tubes du moment.`}
            action="navigate"
            image="/pexels-wendy-wei-1540406.jpg"
          />
          <Card
            title={'Variété francophone'}
            link={`/catalogue/variete-internationale`}
            description={`Les incontournables de Pierre Bachelet, Yves Montand, JJ Goldman, Johnny, 3 cafés gourmands, Ben l'oncle Soul, Claudio Capeo...`}
            action="navigate"
            image="/pexels-jessica-lewis-thepaintedsquare-1010519.jpg"
          />
          <Card
            title={'Bandas / peña'}
            link={`/catalogue/banda`}
            description={`Arrangements pour bandas et peñas parmi les plus connus`}
            action="navigate"
            image="/pexels-gratisography-566.jpg"
          />
        </div>
      </div>
    </main>
  );
}
