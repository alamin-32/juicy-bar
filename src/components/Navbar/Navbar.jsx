import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="mx-auto bg-black">
      <div className="navbar px-20 border border-zinc-500 ">
        <div className="navbar-start mt-2">
          <Link className="text-sm font-semibold text-white ml-5">HOME</Link>
          <Link className="text-sm font-semibold text-white ml-5">
            PRODUCTS
          </Link>
          <Link className="text-sm font-semibold text-white ml-5">BUY</Link>
          <Link className="text-sm font-semibold text-white ml-5">
            ELEMENTS
          </Link>
        </div>
        <div className="navbar-center">
          <Link className="text-3xl font-extrabold text-center  text-white">
            JUICY BAR.
          </Link>
        </div>
        <div className="navbar-end mt-2">
          <div className="">
            <Link className="text-white text-sm font-semibold mr-4">
              LOGIN/REGISTER
            </Link>
          </div>
          {/* shopping cart button */}
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost mr-4 bg-amber-300 btn-circle"
          >
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />{" "}
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          {/* search button  */}
          <button className="btn btn-ghost bg-amber-300 mr-4 btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />{" "}
            </svg>
          </button>
          {/* notification Button */}
          <button className="btn btn-ghost bg-amber-300 mr-5 btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />{" "}
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
