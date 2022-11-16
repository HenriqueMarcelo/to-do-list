import { HiOutlineTrash } from 'react-icons/hi';
import { Checkbox } from './Checkbox';

export function Task() {
  return (
    <div>
      <Checkbox />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Inventore vitae obcaecati quia vel nulla ad mollitia repellendus
        exercitationem dolorum ipsa.
      </p>
      <button type="button">
        <HiOutlineTrash />
      </button>
    </div>
  );
}
