import { TaskProps } from '../App';
import style from './Create.module.css';

interface CreateProps {
  onCreateTask: (task: TaskProps) => void;
}

export function Create({ onCreateTask }:CreateProps) {
  return (
    <form className={style.form}>
      <input type="text" className={style.input} placeholder="Adicione uma nova tarefa" />
      <button type="submit" className={style.button}>
        Criar
        <span className={style.icon} />
      </button>
    </form>
  );
}
