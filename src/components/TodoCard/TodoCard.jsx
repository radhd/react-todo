import styles from "./TodoCard.module.css";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import DateNow from "./date/DateNow";

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
  };

  const onClickRemoveValue = (indexToRemove) => {
    console.log("Click");
    setSubmittedValues(
      submittedValues.filter((_, index) => index !== indexToRemove)
    );
  };

  // Itirate throught an array
  const renderDivs = () => {
    return submittedValues.map((value, index) => (
      <li key={index}>
        {value}
        <input type="checkbox" />
        <span onClick={() => onClickRemoveValue(index)}>
          <DeleteIcon sx={{ color: "red" }} />
        </span>
      </li>
    ));
  };

  return (
    <div className={styles.cardContainer}>
      <div>
        <DateNow />
      </div>
      <form onSubmit={onClickSubmit}>
        <input type="text" onChange={handleChange} value={userInput} />
        <button type="submit">+</button>
      </form>
      <ul>{renderDivs()}</ul>
    </div>
  );
}

export default TodoCard;
