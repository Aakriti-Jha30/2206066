import { useEffect, useState } from "react";
import axios from "axios";

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const fetchTrendingPosts = async () => {
      try {
        const postsResponse = await axios.get("/api/posts", {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjAzNTI3LCJpYXQiOjE3NDM2MDMyMjcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImUxYjU2NTExLTMwZjAtNDUzZS1iYmE5LTc2NGRhYzU1ZDAzOSIsInN1YiI6ImFha3JpdGpoYTg5MEBnbWFpbC5jb20ifSwiZW1haWwiOiJhYWtyaXRqaGE4OTBAZ21haWwuY29tIiwibmFtZSI6ImFha3JpdGkgamhhIiwicm9sbE5vIjoiMjIwNjA2NiIsImFjY2Vzc0NvZGUiOiJud3B3cloiLCJjbGllbnRJRCI6ImUxYjU2NTExLTMwZjAtNDUzZS1iYmE5LTc2NGRhYzU1ZDAzOSIsImNsaWVudFNlY3JldCI6IkFqd1FORE5ReGdmRFNKTlEifQ.cZHdwF8rW6DwmIyIyDDXS8tlJqD2uPuJ2pE0bjaBvIQ",
          },
        });

        const posts = postsResponse.data.posts;

        // Sort posts by comment count in descending order and take top 5
        const sortedPosts = posts.sort((a, b) => b.comments.length - a.comments.length).slice(0, 5);

        setTrendingPosts(sortedPosts);
      } catch (error) {
        console.error("Error fetching trending posts:", error);
      }
    };

    fetchTrendingPosts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Trending Posts</h1>
      <ul>
        {trendingPosts.map((post) => (
          <li key={post.id} className="mb-3 p-4 border rounded shadow">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
            <p className="text-sm text-gray-500">Comments: {post.comments.length}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrendingPosts;
