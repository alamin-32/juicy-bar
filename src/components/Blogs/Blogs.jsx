import React, { use } from "react";
import Blog from "./Blog";

const Blogs = ({ blogsPromise }) => {
  const blogs = use(blogsPromise);
  console.log(blogs);
  return (
    <div className="grid mx-auto max-w-7xl grid-cols-3 gap-2 px-10">
      {/* here using slice to show only 3 blog among all */}
      {blogs.slice(0, 3).map((blog) => (
        <Blog key={blog.id} blog={blog}></Blog>
      ))}
    </div>
  );
};

export default Blogs;
