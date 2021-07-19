import React from "react";
import axios from "axios";

function DataWithUseState() {
    const [error, setError] = React.useState("");
    const [post, setPost] = React.useState({});
    const [postId, setPostId] = React.useState(1);

    function getPost() {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => {
                setError("");
                setPost(response.data);
            })
            .catch((err) => {
                setError(
                    err.response.status === 404
                        ? "Post not found"
                        : "Something went wrong!!"
                );
                setPost({});
                console.log("err => ", err.response);
            });
    }
    
    return (
        <div>
            <h2>Data with useState</h2>
            <input
                type="text"
                onChange={(e) => setPostId(e.target.value)}
            />{" "}
            <br />
            <button onClick={getPost}>Get Post</button> <br />
            {post.title} <br />
            {error} <br />
        </div>
    );
}

export default DataWithUseState;
