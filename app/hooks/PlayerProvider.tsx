'use client';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
export type PlayerContextType = {
  playerUrl: string;
  setPlayerUrl: React.Dispatch<React.SetStateAction<string>>;
};
export const PlayerContext = createContext<PlayerContextType>({
  playerUrl: '',
  setPlayerUrl: () => '',
});

export default function PlayerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [playerUrl, setPlayerUrl] = useState('');

  useEffect(() => {
    console.log(playerUrl);
  }, [playerUrl]);
  return (
    <PlayerContext.Provider value={{ playerUrl, setPlayerUrl }}>
      {children}
    </PlayerContext.Provider>
  );
}
