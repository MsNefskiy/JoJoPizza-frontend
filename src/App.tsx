import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import './style/index.scss';

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
