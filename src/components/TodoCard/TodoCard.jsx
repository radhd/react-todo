import styles from "./TodoCard.module.css";
import { useState } from "react";

function TodoCard() {
  const [userInput, setUserInput] = useState("");
  const [submittedValues, setSubmittedValues] = useState([]);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const onClickSubmit = (event) => {
    event.preventDefault();
    setSubmittedValues([...submittedValues, userInput]);
    setUserInput("");
    console.log(submittedValues);
  };

  return (
    <div className={styles.cardContainer}>
      <form onSubmit={onClickSubmit}>
        <input type="text" onChange={handleChange} value={userInput} />
        <button type="submit">+</button>
      </form>
      <div></div>
    </div>
  );
}

export default TodoCard;
