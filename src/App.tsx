import { Routes, Route } from 'react-router-dom';
import AllServices from './pages/services/AllServices';
import Home from './pages/home/Home';
import Header from './components/Header';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<AllServices />} />
    </Routes>
  );
}

export default App;