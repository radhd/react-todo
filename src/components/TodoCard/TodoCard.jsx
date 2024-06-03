import styles from "./TodoCard.module.css";
import { useState } from "react";
import DateNow from "./date/DateNow";
import FormTodo from "./form/FormTodo";
import PickDate from "./datepicker/PickDate";

function TodoCard() {
  return (
    <div className={styles.cardContainer}>
      <div>
        <DateNow />
      </div>
      <FormTodo />
      {/* <Example /> */}
    </div>
  );
}

export default TodoCard;
