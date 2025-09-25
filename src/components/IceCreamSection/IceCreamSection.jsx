import "./IceCreamSection.css";

const IceCreamSection = () => {
  return (
    <div className="">
      <div className="hero bg-img">
        <div className="hero-content mxx-auto max-w-7xl flex-col gap-5 lg:flex-row">
          <img
            src="/src/image/ice-img1.png"
            className="ml-23 mt-8 ice-img bg-transparent rounded-lg "
          />
          <div className="pl-10">
            <h1 className="text-5xl text-white font-bold">
              Proud & Punch premium natural fruit ice cream
            </h1>
            <p className="py-6 text-gray-200">
              A latin professor at Hampden-Sydney College in Virginia, looked up
              one of the more obscure latin words, consectetur, from a lorem
              ipsum passage, and going through the.
            </p>
            <div className="grid grid-cols-3 gap-5 mt-1">
              <div>
                <h1 className="text-4xl text-white font-bold">20</h1>
                <h3 className="text-md mt-1 text-white font-semibold">
                  INGREDIENTS
                </h3>
                <p className="text-gray-200 text-sm  mt-2">
                  Make type specimen book
                </p>
              </div>
              <div>
                <h1 className="text-4xl text-white font-bold">160</h1>
                <h3 className="text-md mt-1 text-white font-semibold">
                  PACKAGE WEIGHT
                </h3>
                <p className="text-gray-200 text-sm mt-2">
                  When looking at its layout
                </p>
              </div>
              <div>
                <h1 className="text-4xl text-white font-bold">135</h1>
                <h3 className="text-md mt-1 text-white font-semibold">
                  CALORIES ONLY
                </h3>
                <p className="text-gray-200 text-sm mt-2">
                  More recently with desktop
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IceCreamSection;
