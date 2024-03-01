import Navbar from "./components/navbar";
import Home from "./sections/home";
import About from "./sections/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
