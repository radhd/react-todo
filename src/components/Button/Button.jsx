import React from "react";
import styles from "./Button.module.css";

const Button = React.forwardRef((props, ref) => (
  <button ref={ref} {...props}>
    {props.children}
  </button>
));

export default Button;
