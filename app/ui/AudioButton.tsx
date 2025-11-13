'use client';
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';
import { useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { PlayerContext } from '../hooks/PlayerProvider';

// Load react-midi-player only on the client to avoid server-side bundling of native modules
const MidiPlayer: any = dynamic(() => import('react-midi-player').then((m) => m.default || m), {
  ssr: false,
});

export function AudioButton({ trackUrl }: { trackUrl: string }) {
  const { setPlayerUrl, playerUrl } = useContext(PlayerContext);
  const [audioIsSelected, setAudioIsSelected] = useState(false);
  useEffect(() => {
    const doc = document.querySelector('[id="player"]');
  }, [audioIsSelected]);

  return (
    <div className="flex flex-col gap-6">
      <SpeakerWaveIcon
        key={trackUrl}
        className="h-5 w-5 cursor-pointer"
        onClick={() => {
          setPlayerUrl('');
          setAudioIsSelected(true);
          setPlayerUrl(trackUrl);
        }}
      />
      {playerUrl === trackUrl ? (
        <MidiPlayer src={playerUrl} autoplay={false} />
      ) : (
        <></>
      )}
    </div>
  );
}
