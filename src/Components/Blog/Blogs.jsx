import React from "react";
import { useSelector } from "react-redux";
import Blog from "./Blog";

const Blogs = () => {
    const blogs = useSelector((state) => state.blogs);

    return (
        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {blogs.map((blog) => (
                <Blog blog={blog} />
            ))}
        </div>
    );
};

export default Blogs;
