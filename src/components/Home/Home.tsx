import { useEffect, useState } from 'react';
import { loadUserData } from '../../api/api';
import { Card } from '../Card';
import { ICardProps } from '../Card/types/ICardProps';
import { RepositoryList } from '../RepositoryList';
import './styles/index.scss';

export const Home = () => {
  const [userData, setUserData] = useState<ICardProps>({} as ICardProps);
  useEffect(() => {
    const loadData = async () => {
      const userData = await loadUserData();
      setUserData(userData);
    };

    loadData();
  }, []);

  return (
    <div className="container">
      <div className="column left">
        <Card {...userData} />
      </div>
      <div className="column right">
        <RepositoryList />
      </div>
    </div>
  );
};
