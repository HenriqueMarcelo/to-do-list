import { BsClipboard } from 'react-icons/bs';
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

      {tasks.length ? (
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
      ) : (
        <section>
          <p className={style.text}>
            <BsClipboard className={style.icon} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            Crie tarefas e organize seus itens a fazer
          </p>
        </section>
      )}
    </div>
  );
}
