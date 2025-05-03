import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Crew from './components/crew/Crew';
import Technology from './components/technology/Technology';
import Destination from './components/destination/Destination';
import Background from './components/Background';
import Navbar from './components/Navbar';
import { AnimatePresence} from 'framer-motion';
import PageWrapper from './components/PageWrapper';

function App() {
  const location = useLocation();
  const page = location.pathname.split('/')[1] || 'home';

  return (
    <>
      <PageWrapper page={page}>
        <Background page={page} />
      </PageWrapper>

      <Navbar page={page} />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
