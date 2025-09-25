import React from "react";

const Blog = ({ blog }) => {
  const { img, img1, name, description, title } = blog;
  return (
    <div>
      <div className="card ">
        <figure>
          <img className="w-96" src={img1} alt="image of a man" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className="flex">
            <h1>Posted by</h1>
            <img className="w-5 rounded-4xl" src={img} alt="" />
            <p>{name}</p>
          </div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
