import React, { useEffect, useState } from "react";
import TextStyle from "../../shared/TextStyle";
import "./styles.css";
import axios from "axios";
import { Link } from "react-router-dom";

function Task() {
  const [posts, setPosts] = useState([]);
  const [itemsToShow, setItemsToShow] = useState(10);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const showmore = () => {
    setItemsToShow(posts.length);
  };
  const showless = () => {
    setItemsToShow(10);
  };
  const deletePost = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    setPosts(
      posts.filter((post) => {
        return post.id !== id;
      })
    );
  };
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((result) => {
      setPosts(result.data);
    });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    addPosts(title, body);
  };
  const addPosts = (title, body) => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: title,
        body: body,
      })
      .then((response) => {
        setPosts([response.data, ...posts]);
      });
    setTitle("");
    setBody("");
  };

  return (
    <div className="task-container">
      <div className="task-content">
        <div className="task-title">
          <TextStyle
            text="Task"
            coloredIndices={[0]}
            style={{ color: "#ffffff" }}
          />
        </div>
        <form
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <label className="task-card-title">Title</label>
          <textarea
            style={{ minWidth: "300px", minHeight: "100px" }}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <label className="task-card-title">Body</label>
          <textarea
            style={{ minWidth: "300px", minHeight: "100px" }}
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button onClick={handleSubmit} className="task-card-button">
            Add Post
          </button>
        </form>
        <div className="task-cards">
          {posts.slice(0, itemsToShow)?.map((post) => (
            <div className="task-card" key={post.id}>
              <h3 className="task-card-title">{post.title}</h3>
              <p className="task-card-desc">
                {post.body.substring(0, 100)}...{" "}
              </p>
              <button className="task-card-button">
                <Link
                  to={`/${post.id}`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Show More
                </Link>
              </button>
              <button
                style={{
                  color: "red",
                  fontSize: "18px",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => deletePost(post.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="button-wrapper">
          {itemsToShow === 10 ? (
            <button className="task-card-button" onClick={showmore}>
              Show More
            </button>
          ) : (
            <button className="task-card-button" onClick={showless}>
              Show Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Task;
