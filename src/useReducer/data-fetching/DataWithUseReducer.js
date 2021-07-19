import React from "react";
import axios from "axios";

const initialState = {
    postId: 1,
    post: {},
    error: "",
};

function reducer(currState, action) {
    switch (action.type) {
        case "id":
            return { ...currState, postId: action.value };
        case "success":
            return { ...currState, error: '', post: action.payload };
        case "error":
            return { ...currState, error: action.error_message, post: {} };
        default:
            return currState;
    }
}

function DataWithUseReducer() {
    const [postData, dispatchPostData] = React.useReducer(
        reducer,
        initialState
    );

    function getPost() {
        axios
            .get(
                `https://jsonplaceholder.typicode.com/posts/${postData.postId}`
            )
            .then((response) => {
                dispatchPostData({
                    type: "success",
                    payload: response.data,
                });
            })
            .catch(() => {
                dispatchPostData({
                    type: "error",
                    error_message: "Something went wrong!!",
                });
            });
    }

    return (
        <div>
            <h2>Data with useReducer</h2>
            <input
                type="text"
                onChange={(e) =>
                    dispatchPostData({
                        value: e.target.value,
                        type: "id",
                    })
                }
            />{" "}
            <br />
            <button onClick={getPost}>Get Post</button> <br />
            {postData.post.title} <br />
            {postData.error} <br />
        </div>
    );
}

export default DataWithUseReducer;
