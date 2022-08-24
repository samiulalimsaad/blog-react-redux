import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Reset = () => {
    const filters = useSelector((state) => state.filters);

    const { category, title, author } = filters;

    const dispatch = useDispatch();

    if (category || title || author)
        return (
            <div className="flex justify-center my-4 gap-4">
                {filters.category && (
                    <p className="text-sm font-medium text-indigo-600">
                        <span
                            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer"
                            // onClick={handleAuthorCategory}
                        >
                            category
                            <span className="ml-2 text-indigo-400">x</span>
                        </span>
                    </p>
                )}
                {filters.title && (
                    <p className="text-sm font-medium text-indigo-600">
                        <span
                            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer"
                            // onClick={handleAuthorCategory}
                        >
                            title
                            <span className="ml-2 text-indigo-400">x</span>
                        </span>
                    </p>
                )}
                {filters.author && (
                    <p className="text-sm font-medium text-indigo-600">
                        <span
                            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer"
                            // onClick={handleAuthorCategory}
                        >
                            author
                            <span className="ml-2 text-indigo-400">x</span>
                        </span>
                    </p>
                )}
            </div>
        );
};

export default Reset;
