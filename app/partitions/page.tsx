import { loadPartitions } from '../lib/data';
import { Card } from '../ui/Card';
import { lusitana } from '../ui/fonts';

export default async function Page() {
  const data = await loadPartitions();
  return (
    <main className="flex min-h-screen flex-col gap-10 bg-white">
      <div className="mt-16 flex flex-col gap-10 px-6 md:px-16 lg:gap-20 lg:px-24 xl:flex-row">
        <div className="flex flex-col gap-6">
          <h2 className={`${lusitana.className} text-2xl font-bold`}>
            {data.title}
          </h2>
          <p className={`md:text-1xl text-lg text-gray-800 md:leading-normal`}>
            {data.text}
          </p>
          <div className="mt-6 flex flex-col gap-10 md:grid md:grid-cols-4">
            {data?.items.map(
              ({ id, sheet, preview, instrument, name }, index) => (
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
              ),
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
