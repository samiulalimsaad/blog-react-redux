import { combineReducers } from "redux";
import { blogReducer } from "./blog/reducer";
import { filterReducer } from "./filter/reducer";

export const rootReducer = combineReducers({
    blogs: blogReducer,
    filters: filterReducer,
});
