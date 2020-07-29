import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../templates/Counter';
import { increment, decrement } from '../../../store/modules/Counter';

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  };
  handleDecrement = () => {
    this.props.decrement();
  };
  render() {
    const { color, number } = this.props;
    
    return (
      <Counter
        color={color}
        value={number}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    );
  }
}

const mapStateToProps = ({ Counter }) => ({
  color: Counter.color,
  number: Counter.number,
});

const mapDispatchToProps = { increment, decrement };

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
