import "./FeatureProduct.css";

const FeatureProduct = () => {
  return (
    <div className="mx-auto max-w-7xl  my-20">
      <div className="grid grid-cols-3 gap-5 text-center">
        <div className="or-product text-left pl-7 pt-7">
          <h1 className="text-blue-400 text-2xl font-bold text-left">
            FRUIT TEA PACK
          </h1>
          <p className="pt-4 text-zinc-500 font-semibold">
            Three large packs of fruit
          </p>
          <span></span>
          <p className="text-zinc-500 font-semibold">
            tea at the price of one.
          </p>
        </div>
        <div className="or-product text-left pl-7 pt-7">
          <h1 className="text-yellow-400 text-2xl font-bold text-left">
            FRUIT TEA PACK
          </h1>
          <p className="pt-4 text-zinc-500 font-semibold">
            Three large packs of fruit
          </p>
          <span></span>
          <p className="text-zinc-500 font-semibold">
            tea at the price of one.
          </p>
        </div>
        <div className="grid grid-rows-2 gap-5">
          <div className="or-product-bg ">
            <h1 className="text-green-700 pt-5 pl-5   text-2xl font-bold text-left">
              FRUIT TEA PACK
            </h1>
            <p className="text-left pl-5 pt-3 text-zinc-500 font-semibold">
              Three large packs of fruit
            </p>
            <span></span>
            <p className="text-zinc-500 text-left pl-5 font-semibold">
              tea at the price of one.
            </p>
          </div>
          <div className="or-product-bg">
            <h1 className="text-red-700 pt-5 pl-5 text-2xl font-bold text-left">
              FRUIT TEA PACK
            </h1>
            <p className="text-left pl-5 pt-3 text-zinc-500 font-semibold">
              Three large packs of fruit
            </p>
            <span></span> 
            <p className="text-left pl-5 text-zinc-500 font-semibold">
              tea at the price of one.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProduct;
