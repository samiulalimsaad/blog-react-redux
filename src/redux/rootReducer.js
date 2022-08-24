import { combineReducers } from "redux";
import { blogReducer } from "./filter/reducer";

export const rootReducer = combineReducers({
    blogs: blogReducer,
});
