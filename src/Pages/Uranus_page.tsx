import { useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import { planets_data } from "../planet's data";
import Planet_info from "../Components/Planet_full_info/Planet_info";
import { useState } from "react";

const Uranus_page = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [count, SetCount] = useState(1);

  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  const location = useLocation();
  const uranus_location = location.state;

  const color = "#1EC1A2";
  return (
    <>
      <Header
        onClick1={() => SetCount(1)}
        onClick2={() => SetCount(2)}
        onClick3={() => SetCount(3)}
        planet={planets_data}
        screenWidth={screenWidth}
        hover_color={color}
      />
      <main>
        <Planet_info
          onClick1={() => SetCount(1)}
          bgColor1={count === 1 ? color : ""}
          onClick2={() => SetCount(2)}
          bgColor2={count === 2 ? color : ""}
          onClick3={() => SetCount(3)}
          bgColor3={count === 3 ? color : ""}
          planet_img_src={
            count === 1
              ? uranus_location.images.planet
              : count === 2
              ? uranus_location.images.internal
              : count == 3 && uranus_location.images.planet
          }
          planet_surface_img_src={
            count === 3 ? uranus_location.images.geology : ""
          }
          planet_name={uranus_location.name}
          planet_description={
            count === 1
              ? uranus_location.overview.content
              : count === 2
              ? uranus_location.structure.content
              : count == 3 && uranus_location.geology.content
          }
          wiki_link={
            count === 1
              ? uranus_location.overview.source
              : count === 2
              ? uranus_location.structure.source
              : count == 3 && uranus_location.geology.source
          }
          screenWidth={screenWidth}
          rotation_time={uranus_location.rotation}
          revolutin_time={uranus_location.revolution}
          radius={uranus_location.radius}
          avarage_temp={uranus_location.temperature}
        />
      </main>
    </>
  );
};

export default Uranus_page;
