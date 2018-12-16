import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Child.css';

class Child extends Component {
  componentDidMount() {
    console.log('mounting');
  }
  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }
  componentWillUnmount() {
    console.log('unmounting');
  }
  render() {
    return (
      <div className="name">{this.props.name}</div>
    )
  }
}

Child.defaultProps = {
  name: 'hhgf',
};

Child.propTypes = {
  name: PropTypes.string,
};

export default Child;
