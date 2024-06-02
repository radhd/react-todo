import styles from "./TodoCard.module.css";
import { useState } from "react";

function TodoCard() {
  const [userInput, setUserInput] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
    console.log(userInput);
  };

  return (
    <div className={styles.cardContainer}>
      <form>
        <input type="text" onChange={handleChange} value={userInput} />
        <button>+</button>
      </form>
      <div></div>
    </div>
  );
}

export default TodoCard;
