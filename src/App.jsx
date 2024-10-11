import React, { useState } from "react";
import UserDetails from "./UserDetails";

function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchUserData(username);
  };

  const fetchUserData = async (username) => {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const user = await userResponse.json();
      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      const userRepos = await reposResponse.json();

      setUserData(user);
      setRepos(userRepos);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUserData(null);
      setRepos([]);
    }
  };

  const handleReset = () => {
    setUsername("");
    setUserData(null);
    setRepos([]);
  };

  return (
    <div>
      <h1>GitHub User Details</h1>
      {!userData ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Igor-sam-svoj-rob"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button type="submit">Prikaži korisnika</button>
        </form>
      ) : (
        <UserDetails userData={userData} repos={repos} onReset={handleReset} />
      )}
    </div>
  );
}

export default App;
