import React from "react";

const Blog = ({ blog }) => {
  const { img, img1, name, description, title } = blog;
  return (
      <div className="">

      <div className="card ">
        <figure>
          <img className="w-96" src={img1} alt="image of a man" />
        </figure>
        <div className="card-body">
          <h2 className=" text-lg font-bold text-center">{title}</h2>
          <div className="flex mx-auto">
            <h1 className="font-semibold text-gray-500 mr-2">Posted by</h1>
            <img className="w-5 rounded-4xl mr-2" src={img} alt="" />
            <p className="text-gray-500 font-semibold italic">{name}</p>
          </div>
          <p className="text-center text-sm text-gray-500 italic my-1">{description}</p>
          <button className="text-green-700 font-semibold">CONTINUE READING</button>
        </div>
      </div>
    </div>
  );
};

export default Blog;
