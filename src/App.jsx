import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/molecules/Navbar/Navbar";

import {
  About,
  Contact,
  ErrorPage,
  Gallery,
  Home,
  Plans,
  Trainers,
} from "./components/screens";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="plans" element={<Plans />} />
        <Route path="trainers" element={<Trainers />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
