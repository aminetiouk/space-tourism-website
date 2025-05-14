import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Background from './components/background/Background';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Destination from './components/destination/Destination';
import Crew from './components/crew/Crew';
import Technology from './components/technology/Technology';

function App() {
  const location = useLocation();
  const page = location.pathname.split('/')[1] || 'home';

  return (
    <>
      <Background page={page} />
      <div className="container">
        <Navbar page={page} />

        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/destination" element={<Destination />} />
            <Route path="/crew" element={<Crew />} />
            <Route path="/technology" element={<Technology />} />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
