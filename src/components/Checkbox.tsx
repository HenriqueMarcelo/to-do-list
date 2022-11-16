import { useState } from 'react';
import { BiCheck } from 'react-icons/bi';
import style from './Checkbox.module.css';

export function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <button
      className={`${style.checkbox} ${isChecked ? style.checkboxChecked : ''}`}
      type="button"
      onClick={() => { setIsChecked(!isChecked); }}
    >
      {isChecked
      && <BiCheck />}
    </button>
  );
}
