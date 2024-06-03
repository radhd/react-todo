import { useState } from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";

function FormTodo() {
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

  const onClickRemoveValue = (indexToRemove) => {
    console.log("Click");
    setSubmittedValues(
      submittedValues.filter((_, index) => index !== indexToRemove)
    );
  };

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
    <>
      <form onSubmit={onClickSubmit}>
        <input type="text" onChange={handleChange} value={userInput} />
        <button type="submit">+</button>
      </form>
      <ul>{renderDivs()}</ul>
    </>
  );
}

export default FormTodo;
