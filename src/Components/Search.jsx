import React, { useState } from "react";
import { useDispatch } from "react-redux";
import SearchImage from "../assets/search.svg";
import { filterByTitle } from "../redux/filter/actions";

const Search = () => {
    const [input, setInput] = useState("");
    const [timeOutId, setTimeOutId] = useState(null);
    const dispatch = useDispatch();

    const handleInput = (e) => {
        setInput(e.target.value);
        if (timeOutId) {
            clearTimeout(timeOutId);
        }
        const tId = setTimeout(
            () => dispatch(filterByTitle(e.target.value)),
            1500
        );
        setTimeOutId(tId);
    };

    return (
        <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
            <input
                className="outline-none border-none bg-gray-50 h-full w-full mr-2"
                type="search"
                name="search"
                placeholder="Search"
                value={input}
                onChange={handleInput}
            />
            <img
                className="inline h-6 cursor-pointer"
                src={SearchImage}
                alt="Search"
            />
        </div>
    );
};

export default Search;
