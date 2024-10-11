import React from "react";

const UserDetails = ({ userData, repos, onReset }) => {
  return (
    <div>
      <img src={userData.avatar_url} alt={userData.name} width={100} />
      <h2>{userData.name}</h2>
      <p>Location: {userData.location}</p>
      <p>Bio: {userData.bio}</p>
      <h3>Repositories:</h3>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default UserDetails;
