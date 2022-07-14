import { SideBar } from '../../components/SideBar';
import { GlobalContext } from '../../contexts/Genre';
import { Content } from '../../components/Content';
import './styles/index.scss';

export const Home = () => {
  return (
    <GlobalContext>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </GlobalContext>
  );
};
