import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Accordion extends Component {

  constructor(props){
    super(props);

    /* Initial state */
    this.state = {
      opened: false
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      opened: !prevState.opened
    }));
  };

  render(){
    
    const { title, children } = this.props;
    return (
      <div className='accordion'>
        <div className='accordion_header' onClick={this.toggle}>{title}</div>
        {this.state.opened &&
          <div className='accordion_content'>{children}</div>
        }
      </div>
    );
  }
}

Accordion.propTypes = {
  title: PropTypes.string.isRequired
};

Accordion.defaultProps = {};
