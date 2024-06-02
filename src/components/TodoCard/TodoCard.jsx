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

  const renderDivs = () => {
    return submittedValues.map((value, index) => <li key={index}>{value}</li>);
  };

  return (
    <div className={styles.cardContainer}>
      <form onSubmit={onClickSubmit}>
        <input type="text" onChange={handleChange} value={userInput} />
        <button type="submit">+</button>
      </form>
      <div>{renderDivs()}</div>
    </div>
  );
}

export default TodoCard;
