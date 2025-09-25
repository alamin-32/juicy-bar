import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <div className="my-10 mb-15 max-w-7xl mx-auto bg-transparent">
      <div>
        <h1 className="text-6xl font-bold text-center">Testimonials</h1>
        <img className="mx-auto mt-5" src="/src/image/banana-icon.svg" alt="" />
        <h2 className="text-center mt-5 text-gray-500 italic font-semibold">
          There are many variations of passages of lorem ipsum available
        </h2>
      </div>
      <div className="grid my-10 grid-cols-3 gap-5 px-10">
        {reviews.slice(0, 3).map((review) => (
          <Review key={review.id} review={review}></Review>
        ))}
      </div>
      <button className="flex bg-emerald-500 text-white font-semibold mx-auto py-2 px-5 rounded-4xl">
        LEAVE A REVIEW
      </button>
    </div>
  );
};

export default Reviews;
