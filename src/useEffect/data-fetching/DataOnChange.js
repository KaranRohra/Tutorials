import React from "react";
import axios from "axios";

function DataOnChange() {
    const [post, setPost] = React.useState();
    const [postId, setPostId] = React.useState(1);

    React.useEffect(() => {
        async function getpost() {
            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts/${postId}`
                );
                setPost(response.data);
            } catch (err) {
                setPost({ title: "Invalid post ID" });
            }
        }
        getpost();
    }, [postId]);

    return (
        <div>
            <h2>useEffect: Get data on change</h2>
            <input
                type="text"
                onChange={(e) => setPostId(e.target.value)}
            />{" "}
            <br />
            {post ? post.title : ""}
        </div>
    );
}

export default DataOnChange;
