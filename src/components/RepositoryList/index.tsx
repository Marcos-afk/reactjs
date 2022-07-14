import { RepositoryItems } from '../RepositoryItems';
import './styles/index.scss';
import { useEffect, useState } from 'react';
import { IRepositoryList } from './types/IRepositoryList';
import { loadRepositories } from '../../api/api';

export const RepositoryList = () => {
  const [repositories, setRepositories] = useState<IRepositoryList[]>([]);
  useEffect(() => {
    const loadData = async () => {
      const repositoriesData = await loadRepositories();
      setRepositories(repositoriesData);
    };

    loadData();
  }, []);

  return (
    <section className="repository-list">
      <RepositoryItems files={repositories} />
    </section>
  );
};
