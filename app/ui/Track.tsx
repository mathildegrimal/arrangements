'use server';
import { loadTrackAudio } from '../lib/data';
import { AudioButton } from './AudioButton';

export async function Track({
  author,
  name,
}: {
  author: string;
  name: string;
}) {
  const audio = await loadTrackAudio(name);
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
        {audio && audio.file ? (
          <AudioButton trackUrl={audio.file.url} />
        ) : (
          <></>
        )}
      </td>
    </tr>
  );
}
