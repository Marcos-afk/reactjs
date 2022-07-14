import React from 'react';

export interface IPropsGenreContext {
  state: number;
  setState: React.Dispatch<React.SetStateAction<number>>;
}
