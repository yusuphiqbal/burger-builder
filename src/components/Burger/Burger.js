import React from 'react';
import styles from './Burger.module.css';
import Ingredient from './Ingredient/Ingredient';

const Burger = props => {
  let ingredients = Object.keys(props.ingredients)
    .map(ingredient => {
      return [...Array(props.ingredients[ingredient])].map((_, index) => {
        return <Ingredient key={ingredient + index} type={ingredient} />
      });
    }).reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (ingredients.length === 0) {
    ingredients = <p>Please start adding ingresdients 😋</p>
  }

  return (
    <div className={styles.Burger}>
      <Ingredient type="bread-top" />
      {ingredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
}

export default Burger;
