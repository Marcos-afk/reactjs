import React, { useState } from 'react';
import { IDefaultValueGenreContext } from './DefaultValue';
import { GenreContext } from './GenreContext';

interface IChildren {
  children: React.ReactNode;
}
export const GenreContextProvider = ({ children }: IChildren) => {
  const [state, setState] = useState(IDefaultValueGenreContext.state);
  return (
    <GenreContext.Provider value={{ state, setState }}>
      {children}
    </GenreContext.Provider>
  );
};
