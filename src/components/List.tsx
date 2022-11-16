import { Task } from './Task';
import style from './List.module.css';

export function List() {
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
        <Task />
        <Task />
        <Task />
      </section>
    </div>
  );
}
