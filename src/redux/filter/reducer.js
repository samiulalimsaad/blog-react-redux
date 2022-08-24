import {
    FILTER_BY_AUTHOR,
    FILTER_BY_CATEGORY,
    FILTER_BY_TITLE,
    RESET_ALL,
    RESET_BY_AUTHOR,
    RESET_BY_CATEGORY,
    RESET_BY_TITLE,
} from "./actionType";
import { initialState } from "./initialState";

export const filterReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FILTER_BY_AUTHOR:
            return {
                ...state,
                author: payload.author,
            };
        case RESET_BY_AUTHOR:
            return {
                ...state,
                author: "",
            };
        case FILTER_BY_CATEGORY:
            return {
                ...state,
                category: payload.category,
            };
        case RESET_BY_CATEGORY:
            return {
                ...state,
                category: "",
            };
        case FILTER_BY_TITLE:
            return {
                ...state,
                title: payload.title,
            };
        case RESET_BY_TITLE:
            return {
                ...state,
                title: "",
            };
        case RESET_ALL:
            return initialState;

        default:
            return state;
    }
};
