import Reviews from "../Reviews/Reviews";
import "./ProductBenefit.css";

const ProductBenefit = () => {
  return (
    <div>
      <div className="hero bg-ben min-h-screen">
        <div className="hero-content max-w-7xl mx-auto pt-15 flex flex-col">
          <div className="mb-12">
            <h1 className="text-6xl font-bold text-center">How It Works</h1>
            <img
              className="mx-auto my-5"
              src="/src/image/banana-icon.svg"
              alt=""
            />
            <h4 className="text-center text-gray-500 italic font-semibold">
              There are many variations of passages of lorem ipsum available
            </h4>
          </div>
          <div className="flex justify-between">
            <div className="mr-2 mt-15">
              <div className="flex mt-10 mb-15">
                <div className="mr-5">
                  <h1 className="text-xl font-semibold text-right mb-2">
                    Overall Health
                  </h1>
                  <p className="text-sm text-center text-gray-500">
                    All the lorem ipsum generators on the Internet <br />
                    tend to repeat predefined chunks as necessary.
                  </p>
                </div>
                <img
                  className="ben-icon"
                  src="/src/image/organic-Forma-1-1.svg"
                  alt=""
                />
              </div>
              <div className="flex mt-10 mb-15">
                <div className="mr-5">
                  <h1 className="text-xl font-semibold text-right mb-2">
                    Overall Health
                  </h1>
                  <p className="text-sm text-center text-gray-500">
                    All the lorem ipsum generators on the Internet <br />
                    tend to repeat predefined chunks as necessary.
                  </p>
                </div>
                <img
                  className="ben-icon"
                  src="/src/image/hitwork-svg-4.svg"
                  alt=""
                />
              </div>
              <div className="flex mt-10 mb-15">
                <div className="mr-5">
                  <h1 className="text-xl font-semibold text-right mb-2">
                    Overall Health
                  </h1>
                  <p className="text-sm text-center text-gray-500">
                    All the lorem ipsum generators on the Internet <br />
                    tend to repeat predefined chunks as necessary.
                  </p>
                </div>
                <img
                  className="ben-icon"
                  src="/src/image/hitwork-svg-3.svg"
                  alt=""
                />
              </div>
            </div>
            {/* middle photo */}
            <img src="/src/image/org-ben1.png" className="bg-ben-img" />
            {/* second area */}
            <div className="ml-2 mt-15">
              <div className="flex mt-10 mb-15">
                <img
                  className="ben-icon"
                  src="/src/image/organic-Forma-1.svg"
                  alt=""
                />
                <div className="ml-5">
                  <h1 className="text-xl font-semibold text-left mb-2">
                    Overall Health
                  </h1>
                  <p className="text-sm text-center text-gray-500">
                    All the lorem ipsum generators on the Internet <br />
                    tend to repeat predefined chunks as necessary.
                  </p>
                </div>
              </div>
              <div className="flex mt-10 mb-15">
                <img
                  className="ben-icon"
                  src="/src/image/hitwork-svg-2.svg"
                  alt=""
                />
                <div className="ml-5">
                  <h1 className="text-xl font-semibold text-left mb-2">
                    Overall Health
                  </h1>
                  <p className="text-sm text-center text-gray-500">
                    All the lorem ipsum generators on the Internet <br />
                    tend to repeat predefined chunks as necessary.
                  </p>
                </div>
              </div>
              <div className="flex mt-10 mb-15">
                <img
                  className="ben-icon mt-1"
                  src="/src/image/hitwork-svg-1.svg"
                  alt=""
                />
                <div className="ml-5">
                  <h1 className="text-xl font-semibold text-left mb-2">
                    Overall Health
                  </h1>
                  <p className="text-sm text-center text-gray-500">
                    All the lorem ipsum generators on the Internet <br />
                    tend to repeat predefined chunks as necessary.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Reviews></Reviews>
        </div>
      </div>
    </div>
  );
};

export default ProductBenefit;
