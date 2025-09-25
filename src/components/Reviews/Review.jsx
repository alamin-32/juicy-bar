import React from "react";

const Review = ({ review }) => {
  const { name, img, description } = review;
  return (
    <div>
      <div className="card bg-base-100 shadow-2xl">
        <figure className="px-10 py-2">
          <img
            src={img}
            alt="people photo"
            className="rounded-full w-30 mt-7"
          />
        </figure>
        <div className=" p-4 items-center text-center">
          <p className="text-gray-400 italic text-sm font-semibold">
            {description}
          </p>
          <h2 className="text-md font-semibold mt-2">
            {name} -{" "}
            <span className="text-gray-400 text-sm font-medium italic">
              Google Inc
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Review;
