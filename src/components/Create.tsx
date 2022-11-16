import style from './Create.module.css';

export function Create() {
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
