import React from 'react';
import './styles.css';

export const RadioInputWithIcons = ({children, ...props}) => <RadioInput {...props}>
  <span className="icons">
    {children}
  </span>
</RadioInput>

export const RadioInput = ({ text, value=null, name="anon", onChangeFn, children}) =>
<label className="radio-label">
  <input
    tab-index="0"
    type="radio"
    value={value}
    name={name}
    onChange={onChangeFn}
  />
  <span>{text}</span>
  {children}
</label>