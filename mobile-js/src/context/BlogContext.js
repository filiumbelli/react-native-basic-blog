import React from "react";
import jsonServer from "../api/jsonServer";
import { createDataContext } from "./createDataContext";

const ADD_POST = "add_post";
const DELETE_POST = "delete_post";
const EDIT_POST = "edit_post";
const FETCH_POSTS = "fetch_posts";

const blogReducer = (state, action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return action.payload;
        case ADD_POST:
            return [...state, { id: action.payload.id, title: action.payload.title, content: action.payload.content }]
        case DELETE_POST:
            return state.filter(post => post.id != action.payload)
        case EDIT_POST:
            let post = state.find(post => post.id == action.payload.id)
            post.title = action.payload.title;
            post.content = action.payload.content;
            return [...state];
        default:
            return state;
    }
}
const fetchBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get("/blogposts");
        dispatch({ type: FETCH_POSTS, payload: response.data });
    }
}
const addBlogPost = (dispatch) => async (data) => {
    const response = await jsonServer.post("/blogposts", data)
    dispatch({ type: ADD_POST, payload: response.data })
};
const deleteBlogPost = (dispatch) => async (id) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({ type: DELETE_POST, payload: id });
};
const editBlogPost = (dispatch) => async (data) => {
    await jsonServer.put(`/blogposts/${data.id}`, data)
    dispatch({ type: EDIT_POST, payload: data })
};

const actions = { addBlogPost, deleteBlogPost, editBlogPost, fetchBlogPosts };

export const { Context, Provider } = createDataContext(blogReducer, actions, []);
