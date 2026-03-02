import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import MyPlants from './views/MyPlants';
import About from './views/About';
import Header from './Components/Header';
import Footer from './Components/Footer';

export default function App() {
  return (
    <Router>
      <Header />
      <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myplants" element={<MyPlants />} />
        <Route path="/About" element={<About />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  );
}


