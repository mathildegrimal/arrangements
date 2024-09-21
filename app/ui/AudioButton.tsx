'use client';
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';
import { useContext, useEffect, useState } from 'react';
import MidiPlayer from 'react-midi-player';
import { PlayerContext } from '../hooks/PlayerProvider';

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
