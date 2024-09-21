import { loadContact } from '../lib/data';
import { lusitana } from '../ui/fonts';

export default async function Page() {
  const data = await loadContact();

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
