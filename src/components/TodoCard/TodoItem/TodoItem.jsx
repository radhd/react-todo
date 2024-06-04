import DeleteIcon from "@mui/icons-material/DeleteOutlined";

const TodoItem = ({ item, timestamp, toggleCompleted, onClickRemoveValue }) => {
  return (
    <li style={{ color: item.completed ? "red" : "inherit" }}>
      {item.value} {timestamp}
      <input type="checkbox" onClick={toggleCompleted} />
      <span onClick={onClickRemoveValue}>
        <DeleteIcon sx={{ color: "red" }} />
      </span>
    </li>
  );
};
export default TodoItem;
