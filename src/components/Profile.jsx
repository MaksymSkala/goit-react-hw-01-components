import React from 'react';
import user from '../user.json';
import './styles.css';

const Profile = () => {
  return (
    <div className="profile">
      <div className="description">
        <img src={user.avatar} alt="User avatar" className="avatar" />
        <p className="name">{user.username}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>

      <div className="stats">
        <div className="stat">
          <span className="label">Followers</span>
          <span className="quantity">{user.stats.followers}</span>
        </div>
        <div className="stat">
          <span className="label">Views</span>
          <span className="quantity">{user.stats.views}</span>
        </div>
        <div className="stat">
          <span className="label">Likes</span>
          <span className="quantity">{user.stats.likes}</span>
        </div>
      </div>
    </div>
  );
};

export default Profile;