import React from "react";
import Blog from "./Blog";
import { blogs } from "./blogs";

const Blogs = () => {
    return (
        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {blogs.map((blog) => (
                <Blog blog={blog} />
            ))}
        </div>
    );
};

export default Blogs;
