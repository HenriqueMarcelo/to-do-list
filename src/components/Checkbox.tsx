import { BiCheck } from 'react-icons/bi';
import style from './Checkbox.module.css';

interface CheckboxProps {
  checked: boolean;
  onCheck: () => void;
}

export function Checkbox({ checked, onCheck }:CheckboxProps) {
  function handleCheck() {
    onCheck();
  }

  return (
    <button
      className={`${style.checkbox} ${checked && style.checkboxChecked}`}
      type="button"
      onClick={handleCheck}
    >
      {checked
      && <BiCheck />}
    </button>
  );
}
