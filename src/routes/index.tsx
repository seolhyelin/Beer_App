import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import SkillsPage from './SkillsPage';
import ProjectPage from './ProjectPage';
import styles from './Routes.module.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/skills' element={<SkillsPage />} />
      <Route path='/projects' element={<ProjectPage />} />
    </Routes>
  );
};

export default App;
