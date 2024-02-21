import { SpeakerWaveIcon } from '@heroicons/react/24/outline';

export function Track({ author, name }: { author: string; name: string }) {
  return (
    <tr className="border-b">
      <th
        scope="row"
        className="whitespace-nowrap px-6 py-4 font-medium text-gray-900"
      >
        {name}
      </th>
      <td className="px-6 py-4">{author}</td>
      <td className="px-6 py-4">
        <SpeakerWaveIcon className="h-5 w-5" />
      </td>
    </tr>
  );
}
