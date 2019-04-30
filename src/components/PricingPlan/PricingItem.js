import React from 'react';
import PropTypes from 'prop-types';
import styles from './PricingPlan.module.css';

const PricingItem = ({ label, icon, capacity, price, description }) => (
  <div className={styles.pricingItem}>
    <img src={icon} alt={label} className={styles.icon} width="100" />
    <h2 className={styles.label}>{label}</h2>
    <p className={styles.capacity}>{capacity}STORAGE</p>
    <p className={styles.description}>{description}</p>
    <p className={styles.price}>${price}/MO</p>
    <button className={styles.button} type="button">
      Get Started
    </button>
  </div>
);

PricingItem.defaultProps = {
  alt: 'product image',
  label: 'product title',
};

PricingItem.propTypes = {
  label: PropTypes.string,
  icon: PropTypes.string.isRequired,
  // eslint-disable-next-line react/no-unused-prop-types
  alt: PropTypes.string,
  capacity: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default PricingItem;
