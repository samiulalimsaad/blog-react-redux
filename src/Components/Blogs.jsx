import React from "react";
import Blog from "./Blog";

const Blogs = () => {
    return (
        <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
            <Blog />
        </div>
    );
};

export default Blogs;
