import React from 'react';
import styles from './Controls.module.css';
import Control from './Control/Control';

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
];

const Controls = props => (
  <div className={styles.Controls}>
    <p>Current Price: <strong>$ {props.totalPrice.toFixed(2)}</strong></p>
    {controls.map(control => (
      <Control
        disabled={props.disabled[control.type]}
        key={control.label}
        label={control.label}
        removed={() => props.ingredientRemoved(control.type)}
        added={() => props.ingredientAdded(control.type)} />
    ))}
    <button
      className={styles.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}>Order Now</button>
  </div>
)

export default Controls;
