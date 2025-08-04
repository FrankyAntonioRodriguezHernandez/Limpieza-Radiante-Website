import { Routes, Route } from 'react-router-dom';
import AllServices from './pages/services/AllServices';
import Home from './pages/home/Home';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<AllServices />} />
    </Routes>
  );
}

export default App;