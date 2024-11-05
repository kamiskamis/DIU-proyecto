import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Informatica from "./pages/Informatica";
import Resultados from "./pages/Resultados";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/profile"
          element={
            <Profile
              name="Camila Rosales"
              rut="20.562.694-8"
              email="camila.rosales@usm.cl"
              rol="202173631-k"
              carreer="Ing. Civil Informatica"
              profilePicture="src/assets/IMG_7631.jpg"
            />
          }
        />
        <Route path="/informatica" element={<Informatica />} />
        <Route path="/resultados" element={<Resultados />} />
      </Routes>
    </Router>
  );
}

export default App;
