import React from 'react';
import PropTypes from 'prop-types';
import styles from './UserCard.module.css';

const UserCard = ({ id, avatar, name, tag, location, stats }) => (
  <div className={styles.wallpaper}>
    <div className={styles.profile} key={id}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="user avatar"
          className={styles.avatar}
          width="100"
        />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>
      <ul className={styles.stats}>
        <li className={styles.statsItem}>
          <span className={styles.labelA}>Followers</span>
          <span className={styles.quantity}>{stats.followers}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Views</span>
          <span className={styles.quantity}>{stats.views}</span>
        </li>
        <li className={styles.statsItem}>
          <span className={styles.label}>Likes</span>
          <span className={styles.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  </div>
);

UserCard.defaultProps = {
  avatar:
    'https://i.pinimg.com/originals/a0/40/66/a04066a2d1fcf25df39c599e093995c8.jpg',
  followers: '0',
  views: '0',
  likes: '0',
};

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  followers: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  views: PropTypes.string,
  // eslint-disable-next-line react/no-unused-prop-types
  likes: PropTypes.string,
  // eslint-disable-next-line react/require-default-props
  stats: PropTypes.string,
};

export default UserCard;
