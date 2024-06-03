import { useState } from "react";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
// Datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function FormTodo() {
  const [userInput, setUserInput] = useState("");
  const [submittedValues, setSubmittedValues] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const onClickSubmit = (event) => {
    event.preventDefault();
  };

  const onClickRemoveValue = (indexToRemove) => {
    console.log("Click");
    setSubmittedValues(
      submittedValues.filter((_, index) => index !== indexToRemove)
    );
  };

  // Datepicker

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const openDatePicker = () => {
    setIsOpen(true);
  };

  const closedDatePicker = () => {
    setIsOpen(false);
    setSubmittedValues([...submittedValues, userInput]);
    setUserInput("");
    console.log(startDate);
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
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          customInput={<button>+</button>}
          onCalendarOpen={openDatePicker}
          onCalendarClose={closedDatePicker}
        />
      </form>
      <ul>{renderDivs()}</ul>
    </>
  );
}

export default FormTodo;
