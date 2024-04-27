import { useLocation } from "react-router-dom";
import Header from "../Components/Header/Header";
import { planets_data } from "../planet's data";
import { useState } from "react";
import Planet_info from "../Components/Planet_full_info/Planet_info";

const Mars_page = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [count, SetCount] = useState(1);

  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  const location = useLocation();
  const mars_location = location.state;

  const color = "#FF6A45";
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
              ? mars_location.images.planet
              : count === 2
              ? mars_location.images.internal
              : count == 3 && mars_location.images.planet
          }
          planet_surface_img_src={
            count === 3 ? mars_location.images.geology : ""
          }
          planet_name={mars_location.name}
          planet_description={
            count === 1
              ? mars_location.overview.content
              : count === 2
              ? mars_location.structure.content
              : count == 3 && mars_location.geology.content
          }
          wiki_link={
            count === 1
              ? mars_location.overview.source
              : count === 2
              ? mars_location.structure.source
              : count == 3 && mars_location.geology.source
          }
          screenWidth={screenWidth}
          rotation_time={mars_location.rotation}
          revolutin_time={mars_location.revolution}
          radius={mars_location.radius}
          avarage_temp={mars_location.temperature}
        />
      </main>
    </>
  );
};

export default Mars_page;
