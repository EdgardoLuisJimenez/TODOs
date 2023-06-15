import react from "react";
import {TodoIcon} from '../TodoIcon/TodoIcon'

function DeleteIcon({onDelete}) {
  return (
    <TodoIcon
    type='delete'
    color='gray'
    onClick={onDelete}
    />
  );
}

export { DeleteIcon };