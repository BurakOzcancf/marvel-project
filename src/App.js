import Home from "./components/Home";
import Details from "./components/Details";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import Comics from "./components/Comics";
import Creators from "./components/Creators";
import Events from "./components/Events";
import Series from "./components/Series";
import Favourites from "./components/Favourites";
function App() {
  return (
    <Router>
      <header className="flex z-30 fixed w-full justify-between  pr-4 lg:justify-center items-center bg-marvelDark ">
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
        <Route path="/favourites/" element={<Favourites />} />
      </Routes>
    </Router>
  );
}

export default App;
