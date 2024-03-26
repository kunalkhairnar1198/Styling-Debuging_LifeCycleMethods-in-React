import React from 'react';

import './Button.css';

const Button = props => {
  console.log(props.flag)
  return (
    <button  type={props.type} className={`button ${!props.flag ? 'btnInvalid':'validbtn'}`} onClick={props.onClick}>
    {props.children}
  </button>
  );
};

export default Button;
