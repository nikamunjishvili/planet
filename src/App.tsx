import { useState } from "react";
import Header from "./Components/Header/Header";
import Planet_info from "./Components/Planet_full_info/Planet_info";
import { planets_data } from "./planet's data";

const App = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [count, SetCount] = useState(1);

  window.addEventListener("resize", () => {
    setScreenWidth(window.innerWidth);
  });

  const color = "#545BFE";
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
        {planets_data
          .filter((name) => name.name === "Earth")
          .map((item) => {
            return (
              <Planet_info
                onClick1={() => SetCount(1)}
                bgColor1={count === 1 ? color : ""}
                onClick2={() => SetCount(2)}
                bgColor2={count === 2 ? color : ""}
                onClick3={() => SetCount(3)}
                bgColor3={count === 3 ? color : ""}
                key={Math.random()}
                planet_img_src={
                  count === 1
                    ? item.images.planet
                    : count === 2
                    ? item.images.internal
                    : count == 3 && item.images.planet
                }
                planet_surface_img_src={count === 3 ? item.images.geology : ""}
                planet_name={item.name}
                planet_description={
                  count === 1
                    ? item.overview.content
                    : count === 2
                    ? item.structure.content
                    : count == 3 && item.geology.content
                }
                wiki_link={
                  count === 1
                    ? item.overview.source
                    : count === 2
                    ? item.structure.source
                    : count == 3 && item.geology.source
                }
                screenWidth={screenWidth}
                rotation_time={item.rotation}
                revolutin_time={item.revolution}
                radius={item.radius}
                avarage_temp={item.temperature}
              />
            );
          })}
      </main>
    </>
  );
};

export default App;
