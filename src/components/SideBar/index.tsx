import { useContext, useEffect, useState } from 'react';
import { api } from '../../api/api';
import { GenreContext } from '../../contexts/Genre/GenreContext';
import { IGenreResponseProps } from './types/IGenreResponseProps';
import { Button } from '../Button';
import './styles/index.scss';

export const SideBar = () => {
  const { state: selectedGenreId, setState: setSelectedGenreId } =
    useContext(GenreContext);
  const [genres, setGenres] = useState<IGenreResponseProps[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const { data } = await api.get<IGenreResponseProps[]>('genres');
      setGenres(data);
    };

    loadData();
  }, []);

  const handleClickButton = (id: number) => {
    setSelectedGenreId(id);
  };

  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
};
