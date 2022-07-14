import { useContext, useEffect, useState } from 'react';
import { api } from '../../api/api';
import { GenreContext } from '../../contexts/Genre/GenreContext';
import { MovieCard } from '../MovieCard';
import { IGenreResponseProps } from '../SideBar/types/IGenreResponseProps';
import { IMovieProps } from './types/IMovieProps';
import './styles/index.scss';

export const Content = () => {
  const { state: selectedGenreId } = useContext(GenreContext);
  const [movies, setMovies] = useState<IMovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<IGenreResponseProps>(
    {} as IGenreResponseProps,
  );

  useEffect(() => {
    const loadData = async () => {
      const { data: MoviesData } = await api.get<IMovieProps[]>(
        `movies/?Genre_id=${selectedGenreId}`,
      );
      setMovies(MoviesData);

      const { data: GenreData } = await api.get<IGenreResponseProps>(
        `genres/${selectedGenreId}`,
      );
      setSelectedGenre(GenreData);
    };

    loadData();
  }, [selectedGenreId]);

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
