import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Destinations from './pages/Destinations';
import Planning from './pages/Planning';
import Plan from './pages/Plan';

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/plan/:destination" element={<Plan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
