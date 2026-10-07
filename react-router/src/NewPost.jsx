import { useNavigate } from "react-router";
import { format } from "date-fns";
import { useStoreState, useStoreActions } from "easy-peasy";
const NewPost = () => {
  const savePost = useStoreActions((actions) => actions.savePost);
  const posts = useStoreState((state) => state.posts);
  const postBody = useStoreState((state) => state.postBody);
  const postTitle = useStoreState((state) => state.postTitle);
  const setPostBody = useStoreActions((actions) => actions.setPostBody);
  const setPostTitle = useStoreActions((actions) => actions.setPostTitle);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = {
      id,
      title: postTitle,
      datetime,
      body: postBody,
    };
    savePost(newPost);
    navigate("/");
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
