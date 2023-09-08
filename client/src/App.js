//React router dom
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Import components
import Navbar from './components/Navigation';

//IMPORT Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
   <>
   <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    {/* Footer */}
   </Router>
   </>
  );
}

export default App;
