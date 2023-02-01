import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';
import { useState } from 'react';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
  {
    id: 3,
    title: 'Smile',
    isComplete: true,
  },
];

const App = () => {
  const [tasksData, setTasks] = useState(TASKS);

  const updateTasks = (updatedTask) => {
    const listOfTasks = tasksData.map((task) => {
      if (task.id === updatedTask.id) {
        return updatedTask;
      }
      return task;
    });
    setTasks(listOfTasks);
  };

  const deleteTask = (id) => {
    const newListTasks = [];
    for (const task of tasksData) {
      if (task.id !== id) {
        newListTasks.push(task);
      }
    }
    setTasks(newListTasks);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
            tasks={tasksData}
            updateTasks={updateTasks}
            deleteTasks={deleteTask}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
