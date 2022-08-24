import React from "react";
import { useSelector } from "react-redux";
import Blog from "./Blog";

const Blogs = () => {
    const blogs = useSelector((state) => state.blogs);
    const filters = useSelector((state) => state.filters);

    const filterTitle = (blog) => blog.title.includes(filters.title);
    const filterAuthor = (blog) => blog.author.includes(filters.author);
    const filterCategory = (blog) => blog.category.includes(filters.category);

    return (
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {blogs
                .filter(filterAuthor)
                .filter(filterCategory)
                .filter(filterTitle)
                .map((blog) => (
                    <Blog key={blog.id} blog={blog} />
                ))}
        </div>
    );
};

export default Blogs;
