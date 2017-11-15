import React, { Component } from 'react';

const withFeaturedFlag = (wrappedComponent) =>
  class withFeaturedFlag extends Component {
    render() {
      const { featured, ...restProps } = this.props;
      return featured ? <wrappedComponent { ...restProps } /> : <span>Feature disabled!</span>;
    }
  }

export default withFeaturedFlag;