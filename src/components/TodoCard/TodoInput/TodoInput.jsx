const TodoInput = ({ handleChange, userInput }) => {
  return <input type="text" onChange={handleChange} value={userInput} />;
};

export default TodoInput;
