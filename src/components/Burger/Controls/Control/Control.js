import React from 'react';
import styles from './Control.module.css';

const Control = props => (
  <div className={styles.Control}>
    <div className={styles.Label}>{props.label}</div>
    <button
      disabled={props.disabled}
      onClick={props.removed}
      className={styles.Less}>Less</button>
    <button
      className={styles.More}
      onClick={props.added}>More</button>
  </div>
);

export default Control;
