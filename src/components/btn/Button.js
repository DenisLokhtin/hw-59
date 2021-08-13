import React from 'react';
import './Button.css'

const Button = (props) => (
    <button className="btn" onClick={props.fetch}>New Joke</button>
);

export default Button;