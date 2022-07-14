import { IRepositoryItemsProp } from './types/IRepositoryItemProps';

export const RepositoryItem = ({
  name,
  description,
  html_url,
}: IRepositoryItemsProp) => {
  return (
    <li>
      <strong>{name}</strong>
      <p>{description ? description : 'Descrição não informada'}</p>
      <a href={html_url} target="_blank" rel="noreferrer">
        Link do repositório
      </a>
    </li>
  );
};
