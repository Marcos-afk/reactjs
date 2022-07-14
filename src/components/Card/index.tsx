import './styles/index.scss';
import { ICardProps } from './types/ICardProps';

export const Card = ({ avatar_url, html_url, name, location }: ICardProps) => {
  return (
    <div className="card">
      <img src={avatar_url} alt="marcos-afk" />
      <div className="card-container">
        <h3>{name}</h3>
        <a href={html_url} target="_blank" rel="noreferrer">
          Perfil
        </a>
        <h3>{location}</h3>
      </div>
    </div>
  );
};
