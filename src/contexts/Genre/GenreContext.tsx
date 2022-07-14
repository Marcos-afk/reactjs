import { createContext } from 'react';
import { IDefaultValueGenreContext } from './DefaultValue';
import { IPropsGenreContext } from './types/IPropsGenreContext';

export const GenreContext = createContext<IPropsGenreContext>(
  IDefaultValueGenreContext,
);
