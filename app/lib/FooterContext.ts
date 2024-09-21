import { createContext } from 'react';
export type FooterContextType = {
  playerUrl: string;
  setPlayerUrl: React.Dispatch<React.SetStateAction<string>>;
};
export const FooterContext = createContext<FooterContextType>({
  playerUrl: '',
  setPlayerUrl: () => '',
});
