import style from './Counters.module.css';

export function Counters() {
  return (
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
  );
}
