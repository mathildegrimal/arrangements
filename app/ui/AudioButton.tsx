'use client';
import { SpeakerWaveIcon } from '@heroicons/react/24/outline';
import { useContext, useEffect, useState } from 'react';
import { FooterContext } from '../lib/FooterContext';

export function AudioButton({ trackUrl }: { trackUrl: string }) {
  const { setPlayerUrl } = useContext(FooterContext);
  const [audioIsSelected, setAudioIsSelected] = useState(false);
  useEffect(() => {
    const doc = document.querySelector('[id="player"]');
  }, [audioIsSelected]);

  return (
    <div>
      <SpeakerWaveIcon
        key={trackUrl}
        className="h-5 w-5"
        onClick={() => {
          setPlayerUrl('');
          setAudioIsSelected(true);
          setPlayerUrl(trackUrl);
        }}
      />
    </div>
  );
}
