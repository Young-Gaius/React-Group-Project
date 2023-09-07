import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Rockets from './components/Rockets';
import Profile from './components/Profile';
import Missions from './components/Missions';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Rockets />} />
          <Route path="missions" element={<Missions />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<div>If page not found it goes here</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
