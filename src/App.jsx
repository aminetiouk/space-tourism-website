import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Destination from './components/Destination';
import Crew from './components/Crew';
import Technology from './components/Technology';
import Navbar from './components/NavBar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  );
}

export default App;
