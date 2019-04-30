import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from './PricingItem';
import styles from './PricingPlan.module.css';

const PricingPlan = ({ items = [] }) => (
  <div className={styles.wallpaper}>
    <ul className={styles.pricingPlan}>
      {items.map(item => (
        <li className={styles.item} key={item.id}>
          <PricingItem {...item} />
        </li>
      ))}
    </ul>
  </div>
);

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};

export default PricingPlan;
