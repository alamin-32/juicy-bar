import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import FeatureProduct from "./components/FeatureProduct/FeatureProduct";
import Process from "./components/Process/Process";
import IceCreamSection from "./components/IceCreamSection/IceCreamSection";
import ProductBenefit from "./components/ProductBenefits/ProductBenefit";
import FruitDrink from "./components/FruitDrink/FruitDrink";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <FeatureProduct></FeatureProduct>
      <FruitDrink></FruitDrink>
      <Outlet></Outlet>
      <IceCreamSection></IceCreamSection>
      <ProductBenefit></ProductBenefit>
      <Process></Process>
      <Footer></Footer>
    </div>
  );
}

export default App;
