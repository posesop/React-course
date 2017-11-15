import React, { Component } from 'react';
import PropTypes  from 'prop-types';
import './styles.css';
import cnames from 'classnames';

const BtnList = ({ value, items, onChange }) => (
      <ul className="btn-list">
        {
          items.map(item => (
            <li 
              key={item.value} 
              className={cnames('btn-list__item', { 'btn-list__item--active': value === item.value})}>
              <button 
                onClick={() => onChange(item.value)}
                className="btn-list__btn"
              >
                {item.label}</button>
            </li>
          ))
        }
      </ul>
    )

export default BtnList;

BtnList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired
  })),
};
