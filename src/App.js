import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from "./components/Footer/Footer";
import Home from './pages/Home/Home';
import About from './pages/About/About';
import FicheLogement from './pages/FicheLogement/FicheLogement';
import Error from './pages/Error/Error';

function App() {
  return (
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
