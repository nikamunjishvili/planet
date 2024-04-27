import { useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import { planets_data } from "../planet's data";
import { useState } from "react";
import Planet_info from "../Components/Planet_full_info/Planet_info";

const Neptune_page = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [count, SetCount] = useState(1);

  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  const location = useLocation();
  const neptune_location = location.state;

  const color = "#497EFA";
  return (
    <>
      <Header
        onClick1={() => SetCount(1)}
        onClick2={() => SetCount(2)}
        onClick3={() => SetCount(3)}
        screenWidth={screenWidth}
        planet={planets_data}
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
              ? neptune_location.images.planet
              : count === 2
              ? neptune_location.images.internal
              : count == 3 && neptune_location.images.planet
          }
          planet_surface_img_src={
            count === 3 ? neptune_location.images.geology : ""
          }
          planet_name={neptune_location.name}
          planet_description={
            count === 1
              ? neptune_location.overview.content
              : count === 2
              ? neptune_location.structure.content
              : count == 3 && neptune_location.geology.content
          }
          wiki_link={
            count === 1
              ? neptune_location.overview.source
              : count === 2
              ? neptune_location.structure.source
              : count == 3 && neptune_location.geology.source
          }
          screenWidth={screenWidth}
          rotation_time={neptune_location.rotation}
          revolutin_time={neptune_location.revolution}
          radius={neptune_location.radius}
          avarage_temp={neptune_location.temperature}
        />
      </main>
    </>
  );
};

export default Neptune_page;
