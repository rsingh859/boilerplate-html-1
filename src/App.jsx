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
    <div className="app-container">
      <BrowserRouter>
        <Navbar />
        <Home />
        <About />
        <Contact />
        <ErrorPage />
        <Gallery />
        <Plans />
        <Trainers />
      </BrowserRouter>
    </div>
  );
};

export default App;
