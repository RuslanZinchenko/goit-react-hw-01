import React from 'react';
import styles from './TransactionHistory.module.css';

// eslint-disable-next-line react/prop-types
const TransactionHistory = ({ items }) => (
  <table className={styles.transactionHistory}>
    <thead>
      <tr>
        <th className={styles.transactionColumn}>Type</th>
        <th className={styles.transactionColumn}>Amount</th>
        <th className={styles.transactionColumn}>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          <td className={styles.transactionRow}>{item.type}</td>
          <td className={styles.transactionRow}>{item.amount}</td>
          <td className={styles.transactionRow}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.defaultProps = {
  items: [],
};

export default TransactionHistory;
