import { Routes, Route } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Service from "./Service";
function App() {
  return (
    // <Routes>
    //   <Route path="/home" element={<Home />} />
    //   <Route path="/about" element={<About />} />
    //   <Route path="/service" element={<Service />} />
    //   <Route path="/contact" element={<Contact />} />
    // </Routes>
    <Routes>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
