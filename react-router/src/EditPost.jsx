import { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import DataContext from "./context/DataContext";
import { format } from "date-fns";
import api from "./api/posts";

const EditPost = () => {
  const { posts, setPosts } = useContext(DataContext);
  const [editBody, setEditBody] = useState("");
  const [editTitle, setEditTitle] = useState("");
  const { id } = useParams();
  const post = posts.find((post) => post.id.toString() === id);
  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  const handleEdit = async (e, id) => {
    e.preventDefault();
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post)),
      );
      setEditTitle("");
      setEditBody("");
      navigate("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  return (
    <main className="NewPost">
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form
            className="newPostForm"
            onSubmit={(e) => handleEdit(e, post.id)}
          >
            <label htmlFor="editTitle">Title:</label>
            <input
              id="editTitle"
              type="text"
              required
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <label htmlFor="editBody">Post:</label>
            <textarea
              id="editBody"
              required
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              rows={10}
            />
            <button type="submit">Submit</button>
          </form>
        </>
      )}
      {!editTitle && (
        <>
          <h2>Post Not Found</h2>
          <p>Well, that's disappointing</p>
          <p>
            <Link to="/">Visit Our Homepage</Link>
          </p>
        </>
      )}
    </main>
  );
};

export default EditPost;
