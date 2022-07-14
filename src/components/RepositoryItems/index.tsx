import { RepositoryItem } from '../RepositoryItem';
import { IRepositoryItemsProps } from './types/IRepositoryItemsProps';
import './styles/index.scss';

export const RepositoryItems = ({ files }: IRepositoryItemsProps) => {
  return (
    <>
      {files.length > 1 ? (
        <div className="repositories-container">
          <h1>Lista de repositórios</h1>
          <ul>
            {files.map((item) => (
              <RepositoryItem key={item.id} {...item} />
            ))}
          </ul>
        </div>
      ) : (
        <h1>Lista de repositórios vazia</h1>
      )}
    </>
  );
};
