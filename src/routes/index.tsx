import { Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import ListPage from './ListPage';
import FavoritePage from './FavoritePage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='list' element={<ListPage />} />
      <Route path='favorite' element={<FavoritePage />} />
    </Routes>
  );
};

export default App;
