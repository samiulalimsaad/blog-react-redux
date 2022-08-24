import {
    FILTER_BY_AUTHOR,
    FILTER_BY_CATEGORY,
    FILTER_BY_TITLE,
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
        case FILTER_BY_CATEGORY:
            return {
                ...state,
                category: payload.category,
            };
        case FILTER_BY_TITLE:
            return {
                ...state,
                title: payload.title,
            };

        default:
            return state;
    }
};
