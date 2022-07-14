import React from 'react';
import { GenreContextProvider } from './GenreContextProvider';

interface IChildren {
  children: React.ReactNode;
}

export const GlobalContext = ({ children }: IChildren) => {
  return <GenreContextProvider>{children}</GenreContextProvider>;
};
