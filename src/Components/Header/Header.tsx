import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { planets_data } from "../../planet's data";
import Planet_side_menu from "./side_menu/Planet_side_menu";

const Header = ({
  screenWidth,
  planet,
  hover_color,
  onClick1,
  onClick2,
  onClick3,
}: Header_Props) => {
  const [showBurger, setShowNav] = useState(false);

  const navigation = useNavigate();

  const route = (route: void, address: string) => {
    return navigation(address, {
      state: route,
    });
  };

  const planetFinder = (planet_name: string) => {
    return planet.find(
      (planet: { name: string }) => planet.name === planet_name
    );
  };

  const styleConfig = (
    event: any,
    border: string,
    opacity: string,
    color?: string | undefined | any
  ) => {
    (event.target as HTMLElement).style.opacity = opacity;
    (event.target as HTMLElement).style.color = color;

    if (screenWidth > 1300) {
      (event.target as HTMLElement).style.borderTop = border;
    } else if (screenWidth < 1300) {
      (event.target as HTMLElement).style.borderBottom = border;
    }
  };

  const colorArray = [
    "#DEF4FC",
    "#F7CC7F",
    "#545BFE",
    "#FF6A45",
    "#ECAD7A",
    "#FCCB6B",
    "#65F0D5",
    "#497EFA",
  ];
  return (
    <header>
      <div className="head_main_part">
        <h1
          onClick={() => route(planetFinder("Earth"), `/Earth`)}
          className="page_name"
        >
          THE PLANETS
        </h1>

        <FontAwesomeIcon
          style={{ opacity: showBurger ? ".2" : "1" }}
          onClick={() => setShowNav(!showBurger)}
          className="hamburger_icon"
          icon={faBars}
        />
      </div>
      {showBurger ? (
        <div className="planet_side_menu">
          {planets_data.map((item, index) => {
            return (
              <div
                key={Math.random()}
                className="planet_bar"
                onClick={() => route(planetFinder(item.name), `/${item.name}`)}
              >
                <Planet_side_menu
                  bgColor={colorArray[index]}
                  planet_name={item.name}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <nav className="planet_list">
          {screenWidth >= 768 ? (
            <ul>
              {planets_data.map((item) => {
                return (
                  <li
                    key={Math.random()}
                    onClick={() =>
                      route(planetFinder(item.name), `/${item.name}`)
                    }
                    onMouseOver={(event) =>
                      styleConfig(
                        event,
                        `4px solid ${hover_color}`,
                        "1",
                        "white"
                      )
                    }
                    onMouseOut={(event) => styleConfig(event, "none", ".5")}
                  >
                    {item.name}
                  </li>
                );
              })}
            </ul>
          ) : (
            <ul>
              <li
                onClick={onClick1}
                onMouseOver={(event) =>
                  styleConfig(event, `4px solid ${hover_color}`, "1", "white")
                }
                onMouseOut={(event) => styleConfig(event, "none", ".5")}
              >
                Overview
              </li>
              <li
                onClick={onClick2}
                onMouseOver={(event) =>
                  styleConfig(event, `4px solid ${hover_color}`, "1", "white")
                }
                onMouseOut={(event) => styleConfig(event, "none", ".5")}
              >
                Structure
              </li>
              <li
                onClick={onClick3}
                onMouseOver={(event) =>
                  styleConfig(event, `4px solid ${hover_color}`, "1", "white")
                }
                onMouseOut={(event) => styleConfig(event, "none", ".5")}
              >
                Surface
              </li>
            </ul>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;
