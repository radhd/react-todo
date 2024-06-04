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
  const [timestamp, setTimestamp] = useState([]);

  const dateFormat = startDate.toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
  });

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const onClickSubmit = (event) => {
    event.preventDefault();
  };

  const onClickRemoveValue = (indexToRemove) => {
    setSubmittedValues(
      submittedValues.filter((_, index) => index !== indexToRemove)
    );
    setTimestamp(timestamp.filter((_, index) => index !== indexToRemove));
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
    setTimestamp([...timestamp, showHours()]);

    setUserInput("");
  };

  const showHours = () => {
    const today = new Date();
    const hoursFormat = startDate.getHours();
    const minutesFormat = startDate.getMinutes();
    const periodFormat = hoursFormat >= 12 ? "PM" : "AM";
    const formattedTime = `${hoursFormat % 12 || 12}:${
      minutesFormat < 10 ? "0" : ""
    }${minutesFormat} ${periodFormat}`;

    if (startDate.toDateString() === today.toDateString()) {
      return `Today ${formattedTime}`;
    } else {
      return `${dateFormat} ${formattedTime}`;
    }
  };

  const renderDivs = () => {
    return submittedValues.map((value, index) => (
      <li key={index}>
        {value} {timestamp[index]}
        <span> {/* {dateFormat} at {showHours()} */}</span>
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
          // Need to add mindate mintime where user can not select time in the past
        />
      </form>
      <ul>{renderDivs()}</ul>
    </>
  );
}

export default FormTodo;
