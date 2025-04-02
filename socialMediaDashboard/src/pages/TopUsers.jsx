import { useEffect, useState } from "react";
import axios from "axios";

const TopUsers = () => {
  const [topUsers, setTopUsers] = useState([]);
  const userId = 1; //for now

  useEffect(() => {
    const fetchUsersAndPosts = async () => {
      try {
        const usersResponse = await axios.get("/api/users", {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjA0MDE5LCJpYXQiOjE3NDM2MDM3MTksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImUxYjU2NTExLTMwZjAtNDUzZS1iYmE5LTc2NGRhYzU1ZDAzOSIsInN1YiI6ImFha3JpdGpoYTg5MEBnbWFpbC5jb20ifSwiZW1haWwiOiJhYWtyaXRqaGE4OTBAZ21haWwuY29tIiwibmFtZSI6ImFha3JpdGkgamhhIiwicm9sbE5vIjoiMjIwNjA2NiIsImFjY2Vzc0NvZGUiOiJud3B3cloiLCJjbGllbnRJRCI6ImUxYjU2NTExLTMwZjAtNDUzZS1iYmE5LTc2NGRhYzU1ZDAzOSIsImNsaWVudFNlY3JldCI6IkFqd1FORE5ReGdmRFNKTlEifQ.fCc412m3EgMzOpn62R-RvKYZWhwGCf5wx8xADloKWXY",
          },
        });

        const postsResponse = await axios.get(`/api/users/${userId}/posts`, {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQzNjA0MDE5LCJpYXQiOjE3NDM2MDM3MTksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6ImUxYjU2NTExLTMwZjAtNDUzZS1iYmE5LTc2NGRhYzU1ZDAzOSIsInN1YiI6ImFha3JpdGpoYTg5MEBnbWFpbC5jb20ifSwiZW1haWwiOiJhYWtyaXRqaGE4OTBAZ21haWwuY29tIiwibmFtZSI6ImFha3JpdGkgamhhIiwicm9sbE5vIjoiMjIwNjA2NiIsImFjY2Vzc0NvZGUiOiJud3B3cloiLCJjbGllbnRJRCI6ImUxYjU2NTExLTMwZjAtNDUzZS1iYmE5LTc2NGRhYzU1ZDAzOSIsImNsaWVudFNlY3JldCI6IkFqd1FORE5ReGdmRFNKTlEifQ.fCc412m3EgMzOpn62R-RvKYZWhwGCf5wx8xADloKWXY",
          },
        });

        const users = usersResponse.data.users;
        const posts = postsResponse.data.posts;

       
        const postCounts = {};
        posts.forEach((post) => {
          postCounts[post.userid] = (postCounts[post.userid] || 0) + 1;
        });

       
        const userArray = Object.entries(users).map(([id, name]) => ({
          id,
          name,
          postCount: postCounts[id] || 0,
        }));

       
        const topUsersList = userArray
          .sort((a, b) => b.postCount - a.postCount)
          .slice(0, 5);

        setTopUsers(topUsersList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchUsersAndPosts();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Top 5 Users</h1>
      <ul>
        {topUsers.map((user) => (
          <li key={user.id} className="mb-3 p-4 border rounded shadow">
            <img
              src={`https://source.unsplash.com/100x100/?person,${user.id}`} // Random profile image
              alt={user.name}
              className="w-12 h-12 rounded-full mr-3 inline-block"
            />
            <span className="text-lg font-semibold">{user.name}</span> -{" "}
            <span className="text-gray-600">{user.postCount} posts</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopUsers;
