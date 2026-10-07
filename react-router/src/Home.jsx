import Feed from "./Feed";
import { useStoreState } from "easy-peasy";
const Home = ({ fetchError, isLoading }) => {
  const posts = useStoreState((state) => state.searchResults);
  console.log(posts);
  return (
    <main className="Home">
      {isLoading && <p className="statusMsg">Loading Posts...</p>}
      {!isLoading && fetchError && (
        <p className="statusMsg" style={{ color: "red" }}>
          {fetchError}
        </p>
      )}
      {!isLoading &&
        !fetchError &&
        (posts.length ? (
          <Feed posts={posts} />
        ) : (
          <p className="statusMsg">No posts to dislay</p>
        ))}
    </main>
  );
};

export default Home;
