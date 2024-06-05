import { useState } from "react";
// Datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TodoItem from "../TodoItem/TodoItem";
import TodoInput from "../TodoInput/TodoInput";

function FormTodo() {
  const [userInput, setUserInput] = useState("");
  const [submittedValues, setSubmittedValues] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);
  const [timestamp, setTimestamp] = useState([]);

  const toggleCompleted = (index) => {
    const newSubmittedValues = [...submittedValues];
    newSubmittedValues[index] = {
      ...newSubmittedValues[index],
      completed: !newSubmittedValues[index].completed,
    };
    setSubmittedValues(newSubmittedValues);
  };

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
    const newSubmittedValues = submittedValues.filter(
      (_, index) => index !== indexToRemove
    );

    setTimestamp(timestamp.filter((_, index) => index !== indexToRemove));

    setSubmittedValues(
      newSubmittedValues.map((item) => {
        const { completed, ...rest } = item;
        return rest;
      })
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
    if (userInput.trim().length !== 0) {
      const newItem = { value: userInput, completed: false };

      setSubmittedValues([...submittedValues, newItem]);
      setTimestamp([...timestamp, showHours()]);
    }

    setIsOpen(false);
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
    return submittedValues.map((item, index) => (
      <TodoItem
        key={index}
        item={item}
        timestamp={timestamp[index]}
        toggleCompleted={() => toggleCompleted(index)}
        onClickRemoveValue={() => onClickRemoveValue(index)}
      />
    ));
  };

  return (
    <>
      <form onSubmit={onClickSubmit}>
        <TodoInput handleChange={handleChange} userInput={userInput} />
        <DatePicker
          selected={startDate}
          onChange={(startDate) => handleDateChange(startDate)}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          customInput={<button>+</button>}
          onCalendarOpen={openDatePicker}
          onCalendarClose={closedDatePicker}
          minDate={new Date()}
        />
      </form>
      <ul>{renderDivs()}</ul>
    </>
  );
}

export default FormTodo;
