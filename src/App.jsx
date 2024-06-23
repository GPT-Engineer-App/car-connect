import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Connect from "./pages/Connect.jsx";
import Events from "./pages/Events.jsx";
import Clubs from "./pages/Clubs.jsx";
import Share from "./pages/Share.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/connect" element={<Connect />} />
        <Route exact path="/events" element={<Events />} />
        <Route exact path="/clubs" element={<Clubs />} />
        <Route exact path="/share" element={<Share />} />
      </Routes>
    </Router>
  );
}

export default App;