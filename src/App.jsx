import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PageNotFound from "./PageNotFound";
import Reservation from "./Reservation";
import About from "./About";
import Services from "./Services";
import Teams from "./Teams";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/pagenotfound" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
