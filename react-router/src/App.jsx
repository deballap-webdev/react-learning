import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes, useNavigate } from "react-router";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import Layout from "./Layout";

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "March 04, 2027, 11:17:36 AM",
      body: "Lorem ispium dolor sit amet consecute adispicing elit. Quis con",
    },
    {
      id: 2,
      title: "My Second Post",
      datetime: "March 04, 2027, 11:17:36 AM",
      body: "Lorem ispium dolor sit amet consecute adispicing elit. Quis con",
    },
    {
      id: 3,
      title: "My Third Post",
      datetime: "March 04, 2027, 11:17:36 AM",
      body: "Lorem ispium dolor sit amet consecute adispicing elit. Quis con",
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "March 04, 2027, 11:17:36 AM",
      body: "Lorem ispium dolor sit amet consecute adispicing elit. Quis con",
    },
  ]);

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.datetime.toLowerCase().includes(search.toLowerCase()),
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  const handleDelete = (id) => {
    const postList = posts.filter((post) => post.id !== id);
    setPosts(postList);
    navigate("/");
  };

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
    const postList = [...posts, newPost];
    setPosts(postList);
    setPostBody("");
    setPostTitle("");
    navigate("/");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout search={search} setSearch={setSearch} />}
      >
        <Route index element={<Home posts={searchResults} />} />
        <Route path="post">
          <Route
            index
            element={
              <NewPost
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
              />
            }
          />
          <Route
            path=":id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
};

export default App;
