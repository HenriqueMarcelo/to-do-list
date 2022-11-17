import { Task } from './Task';
import style from './List.module.css';

import { TaskProps } from '../App';
import { Counters } from './Counters';

interface CreateProps {
  tasks: TaskProps[];
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function List({ tasks, toggleTask, deleteTask }: CreateProps) {
  return (
    <div className={style.container}>
      <Counters tasks={tasks} />

      <section>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            toggleTask={toggleTask}
            deleteTask={deleteTask}
          />
        ))}
      </section>
    </div>
  );
}
