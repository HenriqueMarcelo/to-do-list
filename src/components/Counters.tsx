import { TaskProps } from '../App';
import style from './Counters.module.css';

interface CountersProps {
  tasks: TaskProps[];
}

export function Counters({ tasks }: CountersProps) {
  const total = tasks.length;
  const completed = tasks.reduce((accumulator, currentValue) => {
    if (currentValue.completed) {
      accumulator += 1;
    }
    return accumulator;
  }, 0);

  return (
    <header className={style.header}>
      <strong className={style.info}>
        Tarefas criadas
        <span className={style.value}>{total}</span>
      </strong>
      <strong className={`${style.info} ${style.infoPurple}`}>
        Concluídas
        <span className={style.value}>
          {completed}
          {' '}
          de
          {' '}
          {total}
        </span>
      </strong>
    </header>
  );
}
