import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const PickDate = (userInput, submitedValues) => {
  const [startDate, setStartDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const handleDateChange = (date) => {
    setStartDate(date);
  };

  const openDatePicker = () => {
    setIsOpen(true);
  };

  const closedDatePicker = () => {
    setIsOpen(false);
    console.log(
      `User input is ${userInput} and submitted values are: ${submitedValues}`
    );
  };

  return (
    <>
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
    </>
  );
};
export default PickDate;
