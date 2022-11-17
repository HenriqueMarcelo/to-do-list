import { Task } from './Task';
import style from './List.module.css';

import { TaskProps } from '../App';

interface CreateProps {
  tasks: TaskProps[];
}

export function List({ tasks }: CreateProps) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <strong className={style.info}>
          Tarefas criadas
          <span className={style.value}>5</span>
        </strong>
        <strong className={`${style.info} ${style.infoPurple}`}>
          Concluídas
          <span className={style.value}>2 de 5</span>
        </strong>
      </header>

      <section>
        {tasks.map((task) => <Task key={task.id} />)}
      </section>
    </div>
  );
}
