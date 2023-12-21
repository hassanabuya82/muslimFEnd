import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import About from './pages/About';
import { Blogs } from './pages/Blogs';
import Contact from './pages/Contact';
import SingleBlog from './pages/SingleBlog';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs/:blogId" element={<SingleBlog />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
