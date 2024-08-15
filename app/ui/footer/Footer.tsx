'use client';
import React, { useContext } from 'react';
import MidiPlayer from 'react-midi-player';

import { FooterContext } from '@/app/lib/FooterContext';
export default function Footer() {
  const { playerUrl } = useContext(FooterContext);
  return (
    <div
      className="flex w-full justify-center bg-gray-100 py-8"
      id="player"
    ></div>
  );
}
