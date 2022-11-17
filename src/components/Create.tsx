import { ChangeEvent, FormEvent, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TaskProps } from '../App';
import style from './Create.module.css';

interface CreateProps {
  onCreateTask: (task: TaskProps) => void;
}

export function Create({ onCreateTask }:CreateProps) {
  const [text, setText] = useState('');

  function handleTextChange(e: ChangeEvent<HTMLInputElement>) {
    setText(e.target.value);
  }

  function handleCreateNewTask(e: FormEvent) {
    e.preventDefault();

    const task = {
      id: uuidv4(),
      completed: false,
      text,
    };

    onCreateTask(task);
    setText('');
  }

  return (
    <form
      className={style.form}
      onSubmit={handleCreateNewTask}
    >
      <input
        type="text"
        className={style.input}
        placeholder="Adicione uma nova tarefa"
        value={text}
        onChange={handleTextChange}
      />
      <button type="submit" className={style.button}>
        Criar
        <span className={style.icon} />
      </button>
    </form>
  );
}
