import { SpeakerWaveIcon } from '@heroicons/react/24/outline';

export function Track({
  author,
  name,
  file,
}: {
  author: string;
  name: string;
  file: string;
}) {
  return (
    <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
      <th
        scope="row"
        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
      >
        {author}
      </th>
      <td className="px-6 py-4">{name}</td>
      <td className="px-6 py-4">
        <SpeakerWaveIcon className="h-5 w-5" />
      </td>
    </tr>
  );
}
