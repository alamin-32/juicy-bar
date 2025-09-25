import { Outlet } from "react-router";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import FeatureProduct from "./components/FeatureProduct/FeatureProduct";
import Process from "./components/Process/Process";
import IceCreamSection from "./components/IceCreamSection/IceCreamSection";
import ProductBenefit from "./components/ProductBenefits/ProductBenefit";
import FruitDrink from "./components/FruitDrink/FruitDrink";
import Blogs from "./components/Blogs/Blogs";
import { Suspense } from "react";

function App() {
  const blogsPromise = fetch("/public/blogs.json").then((res) => res.json());
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <FeatureProduct></FeatureProduct>
      <FruitDrink></FruitDrink>
      <Outlet></Outlet>
      <Suspense fallback={<p>Data loading</p>}>
        <Blogs blogsPromise={blogsPromise}></Blogs>
      </Suspense>
      <IceCreamSection></IceCreamSection>
      <ProductBenefit></ProductBenefit>
      <Process></Process>
      <Footer></Footer>
    </div>
  );
}

export default App;
