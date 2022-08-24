import {
    FILTER_BY_AUTHOR,
    FILTER_BY_CATEGORY,
    FILTER_BY_TITLE,
    RESET_ALL,
    RESET_BY_AUTHOR,
    RESET_BY_CATEGORY,
    RESET_BY_TITLE,
} from "./actionType";

export const filterByCategory = (category) => ({
    type: FILTER_BY_CATEGORY,
    payload: { category },
});

export const filterByAuthor = (author) => ({
    type: FILTER_BY_AUTHOR,
    payload: { author },
});

export const filterByTitle = (title) => ({
    type: FILTER_BY_TITLE,
    payload: { title },
});

export const resetByCategory = () => ({
    type: RESET_BY_CATEGORY,
});

export const resetByAuthor = () => ({
    type: RESET_BY_AUTHOR,
});

export const resetByTitle = (title) => ({
    type: RESET_BY_TITLE,
});

export const resetAll = (title) => ({
    type: RESET_ALL,
});
