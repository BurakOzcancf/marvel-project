import Home from "./components/Home";
import Details from "./components/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Comics from "./components/Comics";
import Creators from "./components/Creators";
import Events from "./components/Events";
import Series from "./components/Series";
function App() {
  return (
    <Router>
      <header className="flex justify-center px-4 items-center bg-marvelDark mb-2 ">
        <Logo />
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info/:id" element={<Details />} />
        <Route path="/comics/" element={<Comics />} />
        <Route path="/creators/" element={<Creators />} />
        <Route path="/events/" element={<Events />} />
        <Route path="/series/" element={<Series />} />
      </Routes>
    </Router>
  );
}

export default App;
