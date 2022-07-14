import { IMovieCardProps } from './types/IMovieCardProps';
import { Star, Clock } from 'react-feather';
import './styles/index.scss';

export const MovieCard = ({
  title,
  poster,
  rating,
  runtime,
}: IMovieCardProps) => {
  return (
    <div className="movie-card">
      <img src={poster} alt={title} />

      <div>
        <div className="movie-info">
          <span>{title}</span>
          <div className="meta">
            <div>
              <Star /> {rating}
            </div>

            <div>
              <Clock /> {runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
