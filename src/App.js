import "./App.css";
import { useState } from "react";
import UserInput from "./components/UserInput";
import Card from "./components/Card";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, input]);
    setInput("");
  };

  const removeHandler = (index) => {
    let storedTasks = [...tasks];
    storedTasks.splice(index, 1);
    setTasks(storedTasks);
  };
  return (
    <div>
      <div>
        <h1>todo list</h1>
      </div>
      <div>
        <UserInput
          handleSubmit={handleSubmit}
          setInput={setInput}
          input={input}
        />
      </div>
      <Card tasks={tasks} removeHandler={removeHandler}/>
    </div>
  );
};

export default App;
