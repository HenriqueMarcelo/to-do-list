import { useState } from 'react';
import { Create } from './components/Create';
import { Header } from './components/Header';
import { List } from './components/List';
import './global.css';

export interface TaskProps {
  text: string;
  id: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState([] as TaskProps[]);

  function onCreateTask(task: TaskProps) {
    setTasks([...tasks, task]);
  }

  function handleToggleTask(id: string) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.completed = !task.completed;
        }
        return task;
      }),
    );
  }

  function handleDeleteTask(id: string) {
    setTasks(
      tasks.filter((task) => task.id !== id),
    );
  }

  return (
    <>
      <Header />
      <Create onCreateTask={onCreateTask} />
      <List
        tasks={tasks}
        toggleTask={handleToggleTask}
        deleteTask={handleDeleteTask}
      />
    </>
  );
}

export default App;
