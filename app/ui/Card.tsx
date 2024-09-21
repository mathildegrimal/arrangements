import {
  BanknotesIcon,
  ClockIcon,
  UserGroupIcon,
  InboxIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import { RxDownload } from 'react-icons/rx';

export function Card({
  title,
  link,
  description,
  action,
  image,
  alt,
  copyright,
}: {
  title: string;
  link: string;
  description: string;
  action: 'navigate' | 'download';
  image: string;
  alt: string;
  copyright: string;
}) {
  return (
    <div className="flex flex-col gap-2 rounded bg-white">
      <Image
        className="h-40 w-full rounded-t object-cover object-center"
        src={image}
        width={800}
        height={600}
        alt={alt}
        title={`©${copyright}`}
      />
      <div className="flex flex-col gap-2 p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <div>
          <hr></hr>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <p>{action === 'navigate' ? 'Voir plus' : 'Télécharger'}</p>
          <Link
            href={link}
            download={title}
            target="_blank"
            rel="noopener noreferrer"
          >
            {action === 'navigate' ? (
              <ArrowRightIcon className="h-5 w-5" />
            ) : (
              <RxDownload className="h-5 w-5" />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
