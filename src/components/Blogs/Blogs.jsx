import React, { use } from "react";
import Blog from "./Blog";

const Blogs = ({ blogsPromise }) => {
  const blogs = use(blogsPromise);
  return (
    <div className="my-15">
      <div>
        <h1 className="text-6xl font-bold text-center">Our Blogs</h1>
        <img className="mx-auto mt-5" src="/src/image/banana-icon.svg" alt="" />
        <h2 className="text-center mt-5 text-gray-500 italic font-semibold">There are many variations of passages of lorem ipsum available</h2>
      </div>
      <div className="grid mx-auto max-w-7xl my-10 grid-cols-3 gap-2 px-10">
        {/* here using slice to show only 3 blog among all */}
        {blogs.slice(0, 3).map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
