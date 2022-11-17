import { HiOutlineTrash } from 'react-icons/hi';
import { TaskProps } from '../App';
import { Checkbox } from './Checkbox';

import style from './Task.module.css';

interface TaskElementProps {
  task: TaskProps;
  toggleTask: (id: string) => void;
  deleteTask: (id: string) => void;
}

export function Task({ task, toggleTask, deleteTask } : TaskElementProps) {
  function handleCheck() {
    toggleTask(task.id);
  }

  function handleDelete() {
    deleteTask(task.id);
  }

  return (
    <div
      className={`${style.container} ${task.completed && style.containerChecked}`}
    >
      <Checkbox checked={task.completed} onCheck={handleCheck} />
      <p
        className={`${style.text} ${task.completed && style.textChecked}`}
      >
        {task.text}
      </p>
      <button type="button" className={style.button} onClick={handleDelete}>
        <HiOutlineTrash />
      </button>
    </div>
  );
}
