import React, { Fragment, Component } from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
  // This could be a functional component doesn't have to be a class component.
  componentDidUpdate() {
    console.log('[OrderSummary] willUpdate');
  }

  render() {
    const summary = Object.keys(this.props.ingredients).map(
      (ingredient, index) => {
        return (
          <li key={ingredient + index}>
            <span>
              {ingredient}: {this.props.ingredients[ingredient]}
            </span>
          </li>
        );
      }
    );

    return (
      <Fragment>
        <h3>Your Order</h3>
        <p>Your delicious burger with the following ingredients. 😋</p>
        <ul>{summary}</ul>
        <p>
          <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchaseCancelled}>
          Cancel
        </Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>
          Continue
        </Button>
      </Fragment>
    );
  }
}

export default OrderSummary;
