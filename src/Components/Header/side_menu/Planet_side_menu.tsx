import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Planet_side_menu = ({ bgColor, planet_name }: Planet_side_menu_Props) => {
  return (
    <>
      <div
        className="planet_circle_in_side_menu"
        style={{ backgroundColor: bgColor }}
      ></div>
      <h3 className="planet_name_side_menu">{planet_name}</h3>
      <FontAwesomeIcon className="arrow_side_menu" icon={faAngleRight} />
    </>
  );
};

export default Planet_side_menu;
