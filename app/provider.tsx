'use client';
import React, { useState } from 'react';

import { FooterContext } from '@/app/lib/FooterContext';
export default function FooterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [playerUrl, setPlayerUrl] = useState('');
  return (
    <FooterContext.Provider value={{ playerUrl, setPlayerUrl }}>
      {children}
    </FooterContext.Provider>
  );
}
