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

  return (
    <>
      <Header />
      <Create onCreateTask={onCreateTask} />
      <List tasks={tasks} />
    </>
  );
}

export default App;
