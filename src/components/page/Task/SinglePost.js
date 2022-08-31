import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import axios from "axios";

function SinglePost({ onDelete }) {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((result) => {
        setPost(result.data);
      });
  }, [id]);
  const deletePost = (e, id) => {
    e.preventDefault();

    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    setPost("");
  };
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setPost({ ...post, [name]: value });
    console.log(post);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const editDataById = async () => {
      try {
        const response = await axios
          .put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "PUT",
            body: JSON.stringify({
              id: id,
              title: post.title,
              body: post.body,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
          .then((response) => response.json())
          .then((json) => console.log(json));
        console.warn(response.data);
      } catch (error) {
        console.warn(error);
      }
    };
    editDataById();
  };

  return (
    <div
      style={{
        background: "#000",
        margin: "-120px 0 100px 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "1100px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",

          maxHeight: "400px",
        }}
      >
        <input
          type="text"
          className="task-card-title-single"
          onChange={handleChange}
          value={post.title}
        />

        <input
          type="text"
          className="task-card-desc-single"
          onChange={handleChange}
          value={post.body}
        />
        <p style={{ color: "#ffffff", fontSize: "16px", marginTop: "10px" }}>
          {" "}
          Click On The Text Written Above To Change It's Value and Then Update{" "}
        </p>
      </div>
      <div className="button-wrapper-single">
        <button
          className="task-card-button"
          onClick={() => deletePost(post.id)}
        >
          Delete
        </button>
        <button className="task-card-button" onClick={handleSubmit}>
          Update
        </button>
      </div>
    </div>
  );
}

export default SinglePost;
