import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import DataContext from "./context/DataContext";
import { format } from "date-fns";
import api from "./api/posts";
const NewPost = () => {
  const { posts, setPosts } = useContext(DataContext);
  const [postBody, setPostBody] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody,
    };
    try {
      const response = await api.post("/posts", newPost);
      const postList = [...posts, response.data];
      setPosts(postList);
      setPostBody("");
      setPostTitle("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <main className="NewPost">
      <h2>New Post</h2>
      <form className="newPostForm" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input
          id="postTitle"
          type="text"
          required
          value={postTitle}
          onChange={(e) => setPostTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          id="postBody"
          required
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          rows={10}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default NewPost;
