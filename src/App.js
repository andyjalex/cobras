import { Navbar, Footer } from './components'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Home, Tournaments } from './pages'
import './App.css';

function App() {
  return (
    <Router>
           
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/tournaments" element={<Tournaments />} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;
