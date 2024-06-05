import styles from "./TodoInput.module.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const TodoInput = ({ handleChange, userInput }) => {
  return (
    <div style={{ position: "relative" }}>
      <label htmlFor="todoInput">
        <CheckCircleIcon className={styles.customIconColor} />
      </label>
      <input
        type="text"
        id="todoInput"
        onChange={handleChange}
        value={userInput}
        placeholder="Note"
        className={styles.todoInput}
      />
    </div>
  );
};

export default TodoInput;
