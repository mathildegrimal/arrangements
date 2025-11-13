import { AiFillWarning } from 'react-icons/ai';
import { loadPartitions } from '../lib/data';
import { Card } from '../ui/Card';
import { lusitana } from '../ui/fonts';

export default async function Page() {
  const data = await loadPartitions();
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
    <div className="flex flex-col gap-10 xl:flex-row">
      <div className="flex flex-col gap-6">
        <h2 className={`${lusitana.className} text-2xl font-bold`}>
          {data.title}
        </h2>
        <p className={`md:text-1xl text-lg text-gray-800 md:leading-normal`}>
          {data.text}
        </p>
        <div className="mt-6 flex flex-col gap-10 md:grid md:grid-cols-4">
          {data.items.map(({ id, sheet, preview, instrument, name }) => (
            <Card
              title={name}
              link={sheet.url}
              description={`Partition pour ${instrument}`}
              action="download"
              image={preview.url}
              key={id}
              alt={preview.alt}
              copyright={preview.copyright}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
