import { Suspense } from 'react';

export function VideoCard({ title, link }: { title: string; link: string }) {
  return (
    <div className="flex flex-col justify-between gap-2 rounded bg-white">
      <h3 className="text-lg">{title}</h3>
      <Suspense fallback={<p>Loading video...</p>}>
        <iframe
          src={link}
          width="280"
          height="157"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        />
      </Suspense>
    </div>
  );
}
