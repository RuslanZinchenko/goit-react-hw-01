import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({ title, items = [] }) => (
  <div className={styles.wallpaper}>
    <section className={styles.statsSection}>
      <h2 className={styles.title}>{title}</h2>
      <ul className={styles.statList}>
        {items.map(item => (
          <li className={styles.item} key={item.id}>
            <span className={styles.label}>{item.label}</span>
            <span className={styles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  </div>
);

Stats.defaultProps = {
  title: 'title',
  // eslint-disable-next-line react/default-props-match-prop-types
  label: 'label',
  // eslint-disable-next-line react/default-props-match-prop-types
  percentage: '?',
};

Stats.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ).isRequired,
};

export default Stats;
