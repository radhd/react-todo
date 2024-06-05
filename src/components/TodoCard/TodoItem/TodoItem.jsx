import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import styles from "./TodoItem.module.css";
import { Checkbox, makeStyles } from "@mui/material/Checkbox";

const TodoItem = ({ item, timestamp, toggleCompleted, onClickRemoveValue }) => {
  return (
    <li
      className={styles.todoItem}
      style={{ color: item.completed ? "red" : "inherit" }}
    >
      <div>
        <p className={styles.value}>{item.value}</p>
        <p className={styles.timestamp}>{timestamp}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* <input
          className={styles.customCheckbox}
          type="checkbox"
          onClick={toggleCompleted}
        /> */}
        <Checkbox defaultChecked color="success" />
        <span onClick={onClickRemoveValue}>
          <DeleteIcon sx={{ color: "red" }} />
        </span>
      </div>
    </li>
  );
};
export default TodoItem;
