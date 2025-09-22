import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import FeatureProduct from "./components/FeatureProduct/FeatureProduct";
import Process from "./components/Process/Process";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <FeatureProduct></FeatureProduct>
      <Outlet></Outlet>
      <Process></Process>
      <Footer></Footer>
    </div>
  );
}

export default App;
