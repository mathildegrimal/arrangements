'use client';
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';
import { useContext, useEffect, useState } from 'react';
import { FooterContext } from '../lib/FooterContext';
import MidiPlayer from 'react-midi-player';

export function AudioButton({ trackUrl }: { trackUrl: string }) {
  const { setPlayerUrl, playerUrl } = useContext(FooterContext);
  const [audioIsSelected, setAudioIsSelected] = useState(false);
  useEffect(() => {
    const doc = document.querySelector('[id="player"]');

    console.log(window.Audio);
  }, [audioIsSelected]);

  return (
    <div className="flex flex-col gap-6">
      <SpeakerWaveIcon
        key={trackUrl}
        className="h-5 w-5"
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
