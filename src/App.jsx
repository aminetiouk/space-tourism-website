import { Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import Crew from './components/crew/Crew'
import Technology from './components/technology/Technology'
import Navbar from './components/NavBar';
import Destination from './components/destination/Destination';

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
