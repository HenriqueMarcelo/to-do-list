import { useState } from 'react';
import { HiOutlineTrash } from 'react-icons/hi';
import { Checkbox } from './Checkbox';

import style from './Task.module.css';

export function Task() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked((state) => !state);
  }

  return (
    <div
      className={`${style.container} ${isChecked && style.containerChecked}`}
    >
      <Checkbox checked={isChecked} onCheck={handleCheck} />
      <p
        className={`${style.text} ${isChecked && style.textChecked}`}
      >
        Integer urna interdum massa libero auctor neque turpis turpis semper.
        Duis vel sed fames integer.
      </p>
      <button type="button" className={style.button}>
        <HiOutlineTrash />
      </button>
    </div>
  );
}
