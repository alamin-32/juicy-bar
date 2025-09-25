import "./FruitDrink.css";

const FruitDrink = () => {
  return (
    <div>
      <div className="hero bg-white mx-w-7xl my-10">
        <div className="hero-content flex-col lg:flex-row">
          <img src="/src/image/blend-bg2.png" className="blend-img" />
          <div className="ml-15">
            <h1 className="text-6xl font-bold">Blend fruits</h1>
            <h1 className="text-6xl font-bold">premium drink</h1>
            <p className="py-6 text-gray-500 ">
              Many desktop publishing packages and web page <br /> editors now
              use Lorem Ipsum as their default model <br /> text, and a search
              for lorem ipsum will uncover.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h1 className="text-md font-semibold">FRUITS:</h1>
                <p className="divider m-0 "></p>
                <h4 className="text-sm italic text-gray-500">
                  Feijoa, Piña, Manzana
                </h4>
              </div>
              <div>
                <h1 className="text-md font-semibold">PACKAGING:</h1>
                <p className=" divider m-0"></p>
                <h4 className="text-sm italic text-gray-500">Glass Bottle</h4>
              </div>
              <div>
                <h1 className="text-md font-semibold">SHELF LIFE:</h1>
                <p className=" divider m-0"></p>
                <h4 className="text-sm italic text-gray-500">One Month</h4>
              </div>
              <div>
                <h1 className="text-md font-semibold">BOTTLE SIZE:</h1>
                <p className="divider m-0 "></p>
                <h4 className="text-sm italic text-gray-500">300ml</h4>
              </div>
            </div>
            <div className="mt-5">
              <button className="btn bg-green-600 text-white rounded-4xl">
                VIEW MORE
              </button>
              <button className="btn ml-5 bg-gray-300 text-black rounded-4xl">
                GO TO SHOP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruitDrink;
