import React from "react";
import axios from "axios";

function DataOnClick() {
    const [post, setPost] = React.useState();
    const [postId, setPostId] = React.useState(1);
    const [postIdSubmit, setPostIdSubmit] = React.useState(1);

    const getPostIdSubmit = () => setPostIdSubmit(postId);

    React.useEffect(() => {
        async function getpost() {
            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts/${postIdSubmit}`
                );
                setPost(response.data);
            } catch (err) {
                setPost({ title: "Invalid post ID" });
            }
        }

        getpost();
    }, [postIdSubmit]);

    return (
        <div>
            <h2>useEffect: Get data on click</h2>
            <input
                type="text"
                onChange={(e) => setPostId(e.target.value)}
            />{" "}
            <br />
            <button onClick={getPostIdSubmit}>Get Post</button> <br />
            {post ? post.title : ""}
        </div>
    );
}

export default DataOnClick;
