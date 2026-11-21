import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Details from './pages/Details';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Родительский маршрут Products */}
          <Route path="/products" element={<Products />}>
            {/* Вложенный маршрут Details */}
            <Route path=":id" element={<Details />} />
          </Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}