import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
