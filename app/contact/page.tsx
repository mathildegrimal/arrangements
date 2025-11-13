import { AiFillWarning } from 'react-icons/ai';
import { loadContact } from '../lib/data';
import { lusitana } from '../ui/fonts';

export default async function Page() {
  const data = await loadContact();

  if (!data) {
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
      <h2 className={`${lusitana.className} text-2xl font-bold`}>
        {data.title}
      </h2>
      <div className="flex flex-col gap-3">
        <h3
          className={`md:text-1xl text-lg font-semibold text-gray-800 md:leading-normal`}
        >
          Par mail :
        </h3>
        <a
          href={`mailto:${data.email}`}
          className={`md:text-1xl text-lg text-gray-800 md:leading-normal`}
        >
          {data.email}
        </a>
      </div>
      <div className="flex flex-col gap-3">
        <h3
          className={`md:text-1xl text-lg font-semibold text-gray-800 md:leading-normal`}
        >
          Par téléphone :
        </h3>
        <a
          href={`tel:${data.telephone.replaceAll('.', '')}`}
          className={`md:text-1xl text-lg text-gray-800 md:leading-normal`}
        >
          {data.telephone}
        </a>
      </div>
    </>
  );
}
