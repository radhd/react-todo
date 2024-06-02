import TodoCard from "./components/TodoCard/TodoCard";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <TodoCard />
    </div>
  );
}

export default App;
