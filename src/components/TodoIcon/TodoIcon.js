import { ReactComponent as CheckSvg } from "../check.svg";
import { ReactComponent as DeleteSVG } from "../delete.svg";
import "./TodoIcon.css";

const iconTypes = {
  check: (color) => <CheckSvg className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSVG className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <span className={`Icon-container Icon-container-${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
