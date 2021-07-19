import React from "react";
import axios from "axios";

function DataOnFirstRender() {
    const [posts, setPosts] = React.useState([]);

    React.useEffect(() => {
        async function getposts (){
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            setPosts(response.data);
        };
        getposts();
    }, []);

    return (
        <div>
            <h2>useEffect: Get data on first render</h2>
            <ul>
                {posts.length !== 0
                    ? posts.map((post, index) => (
                          <li key={index}>{post.title}</li>
                      ))
                    : "Loading..."}
            </ul>
        </div>
    );
}

export default DataOnFirstRender;
