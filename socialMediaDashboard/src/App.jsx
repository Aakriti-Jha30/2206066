import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopUsers from "./pages/TopUsers";
import TrendingPosts from "./pages/TrendingPosts";
import RealTimePosts from "./pages/RealTimePosts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopUsers />} />
        <Route path="/trending" element={<TrendingPosts />} />
        <Route path="/real-time" element={<RealTimePosts />} />
      </Routes>
    </Router>
  );
}

export default App;
