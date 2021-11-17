import React from "react";

const BlogContext = React.createContext();

const blogPost = [
    { title: "Blog Post #1" },
    { title: "Blog Post #2" },
];

export const BlogProvider = ({ children }) => {

    const [posts, setPosts] = React.useState(blogPost);

    const addBlogPost = (title) => {
        setPosts([...posts, {title: title}])
    }

    return <BlogContext.Provider value={{ data: posts, addBlogPost }}>
        {children}
    </BlogContext.Provider>
};


export default BlogContext;