import { Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import ListPage from './ListPage';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='list' element={<ListPage />} />
    </Routes>
  );
};

export default App;
