import React from "react";
import "./App.css";
import ListContainer from "./Containers/ListContainers";

function App() {

  const getTaskFromLocalStorage = () =>{
      const tasks = JSON.parse(localStorage.getItem("tasks"))
      console.log(tasks)
     return tasks ? tasks : [];
  }
  
  const [Tasks, addTask] = React.useState(getTaskFromLocalStorage);

  const addTaskHander = (message) => {
    const task = {
      id: Math.random(),
      text: message,
      type: 1,
    };
    addTask((prev) => prev.concat(task));
  };

  React.useEffect( ()=>{
    localStorage.setItem("tasks",JSON.stringify(Tasks));
  })


  const changeHandler = (id, type) => {
    const updatedTask = Tasks.find((task) => task.id === id);
    const task = {
      ...updatedTask,
      type: type,
    };
    let newTasks = Tasks.filter((task) => task.id !== id);
    newTasks.push(task);
    addTask(() => newTasks);
  };
  const deleteHandler = (id) => {
    let newTasks = Tasks.filter((task) => task.id !== id);
    addTask(() => newTasks);
  };

  return (
    <div className="section">
      {/* <Nabbar/> */}
      <h1 className="title">TODO APP</h1>
      <div className="main-container">
        <ListContainer
          list={Tasks}
          delete={deleteHandler}
          add={addTaskHander}
          type={1}
          change={changeHandler}
          name={"Todo"}
        />
        <ListContainer
          list={Tasks}
          delete={deleteHandler}
          type={2}
          change={changeHandler}
          name={"Doing"}
        />
        <ListContainer
          list={Tasks}
          delete={deleteHandler}
          type={3}
          change={changeHandler}
          name={"Done"}
        />
      </div>
    </div>
  );
}

export default App;
