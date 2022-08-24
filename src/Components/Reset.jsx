import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    resetAll,
    resetByAuthor,
    resetByCategory,
    resetByTitle,
} from "../redux/filter/actions";

const Reset = () => {
    const filters = useSelector((state) => state.filters);

    const { category, title, author } = filters;

    const dispatch = useDispatch();

    const handleReset = (type) => {
        switch (type) {
            case "category":
                return dispatch(resetByCategory());
            case "title":
                return dispatch(resetByTitle());
            case "author":
                return dispatch(resetByAuthor());
            case "all":
                return dispatch(resetAll());

            default:
                return;
        }
    };

    if (category || title || author)
        return (
            <div className="flex justify-center my-4 gap-4">
                {category && (
                    <p className="text-sm font-medium text-indigo-600">
                        <span
                            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer"
                            onClick={() => handleReset("category")}
                        >
                            category
                            <span className="ml-2 text-indigo-400">x</span>
                        </span>
                    </p>
                )}
                {title && (
                    <p className="text-sm font-medium text-indigo-600">
                        <span
                            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer"
                            onClick={() => handleReset("title")}
                        >
                            title
                            <span className="ml-2 text-indigo-400">x</span>
                        </span>
                    </p>
                )}
                {author && (
                    <p className="text-sm font-medium text-indigo-600">
                        <span
                            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer"
                            onClick={() => handleReset("author")}
                        >
                            author
                            <span className="ml-2 text-indigo-400">x</span>
                        </span>
                    </p>
                )}
                {author && category && title && (
                    <p className="text-sm font-medium text-indigo-600">
                        <span
                            className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 cursor-pointer"
                            onClick={() => handleReset("all")}
                        >
                            all
                            <span className="ml-2 text-indigo-400">x</span>
                        </span>
                    </p>
                )}
            </div>
        );
};

export default Reset;
