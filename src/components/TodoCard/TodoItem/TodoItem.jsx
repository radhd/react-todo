import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import styles from "./TodoItem.module.css";

const TodoItem = ({ item, timestamp, toggleCompleted, onClickRemoveValue }) => {
  return (
    <li className={styles.todoItem}>
      <div>
        <p
          style={{
            textDecoration: item.completed ? "line-through" : "none",
            transition: "text-decoration 0.3s ease",
          }}
          className={styles.value}
        >
          {item.value}
        </p>
        <p className={styles.timestamp}>{timestamp}</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ position: "relative" }}>
          <input
            className={styles.customCheckbox}
            type="checkbox"
            onClick={toggleCompleted}
          />
        </div>
        <span onClick={onClickRemoveValue}>
          <DeleteIcon sx={{ color: "red" }} />
        </span>
      </div>
    </li>
  );
};
export default TodoItem;
