import "./App.css";
import Todo from "./components/Todo/Todo";
import FormTodo from "./components/FormTodo/FormTodo";
import Button from "./components/Button/Button";
import { useReducer, useMemo } from "react";

const stateDefaultValue = {
  list: [],
  counter: 1,
  isError: false,
};

const reducer = (state, action) => {
  let { type, payload } = action;
  let { list, isError, counter } = state;

  // Switch
  switch (type) {
    case "AddTask": {
      console.log(todo);
      if (!todo.activity || !todo.date || !todo.time) {
        isError = true;
      } else {
        isError = false;
        let id = counter;
        counter++;
        list = [...list, { ...todo, id: id }];
      }
    }

    case "deleteTask": {
      list = list.filter((obj) => obj.id != payload);
    }
    default:
  }

  return {
    ...state,
    list: list,
    isError: isError,
    counter: counter,
  };
};

const todo = {};

function App() {
  const [state, dispatch] = useReducer(reducer, stateDefaultValue);

  const handleInputChange = (e) => {
    todo[e.target.name] = e.target.value;
    console.log(todo);
  };

  const handleAddDispatch = () => {
    dispatch({ type: "AddTask" });
  };

  const handleDeleteDispatch = (e) => {
    dispatch({
      type: "deleteTask",
      payload: e.target.id,
    });
  };

  return (
    <div className="App">
      <FormTodo state={state} onChange={handleInputChange}>
        <Button onClick={handleAddDispatch}>Aggiungi</Button>
      </FormTodo>

      {state.list.map((obj, index) => {
        return (
          <Todo
            key={"todo" + index}
            todoData={obj}
            onClick={handleDeleteDispatch}
          />
        );
      })}
    </div>
  );
}

export default App;
