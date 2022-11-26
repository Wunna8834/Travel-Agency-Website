import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import bootstrap from 'bootstrap'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About'
import Footer from './components/Footer';
import Testing from './components/Testing';
import Service from './pages/Service';
import Contact from './pages/Contact';
function App() {
  return (
    <div className='container-fluid bg-light'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
