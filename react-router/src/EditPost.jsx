import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { useStoreActions, useStoreState } from "easy-peasy";
import { format } from "date-fns";

const EditPost = () => {
  const getPostById = useStoreState((state) => state.getPostById);
  const editPost = useStoreActions((actions) => actions.editPost);
  const editBody = useStoreState((state) => state.editBody);
  const editTitle = useStoreState((state) => state.editTitle);
  const setEditBody = useStoreActions((actions) => actions.setEditBody);
  const setEditTitle = useStoreActions((actions) => actions.setEditTitle);
  const { id } = useParams();
  const post = getPostById(id);
  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      setEditTitle(post.title);
      setEditBody(post.body);
    }
  }, [post, setEditTitle, setEditBody]);

  const handleEdit = (e, id) => {
    e.preventDefault();
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    editPost(updatedPost);
    navigate(`/post/${id}`);
  };
  return (
    <main className="NewPost">
      {post && (
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
      {!post && (
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
