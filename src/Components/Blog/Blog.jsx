import React from "react";
import { useDispatch } from "react-redux";
import { filterByAuthor, filterByCategory } from "../../redux/filter/actions";

const Blog = ({ blog }) => {
    const { id, title, category, author, createdAt, read, image } = blog;
    const dispatch = useDispatch();

    const handleAuthorFilter = () => {
        dispatch(filterByAuthor(author));
    };

    const handleAuthorCategory = () => {
        dispatch(filterByCategory(category));
    };

    return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={image} alt="" />
            </div>

            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                    <p className="text-sm font-medium text-indigo-600">
                        <span
                            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer"
                            onClick={handleAuthorCategory}
                        >
                            {category}
                        </span>
                    </p>
                    <p className="block mt-1 cursor-pointer">
                        <span className="text-xl font-semibold text-gray-900">
                            {title}
                        </span>
                    </p>
                </div>
                <div className="mt-6 flex items-center">
                    <div className="flex-shrink-0">
                        <img
                            className="h-10 w-10 rounded-full"
                            src={image}
                            alt=""
                        />
                    </div>
                    <div className="ml-3">
                        <p
                            className="text-sm font-medium text-gray-900 hover:underline cursor-pointer"
                            onClick={handleAuthorFilter}
                        >
                            {author}
                        </p>
                        <div className="flex space-x-1 text-sm text-gray-500">
                            <time dateTime={createdAt}>{createdAt}</time>
                            <span aria-hidden="true">&middot;</span>
                            <span> {read} min read </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
