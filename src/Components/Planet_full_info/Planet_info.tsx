import Wiki_Icon from "../../assets/Icons/Wiki_Arrow.png";
import Planet_facts from "./Planet_facts";
import Planet_interactive_info_block from "./Planet_interactive_info_block";
const Planet_info = ({
  onClick1,
  bgColor1,
  onClick2,
  bgColor2,
  onClick3,
  bgColor3,
  planet_img_src,
  planet_surface_img_src,
  planet_name,
  planet_description,
  wiki_link,
  screenWidth,
  rotation_time,
  revolutin_time,
  radius,
  avarage_temp,
}: Planet_info_Props) => {
  return (
    <>
      <div className="main_information">
        <div className="planet_cont">
          <img className="planet_img" src={planet_img_src} alt="Planet Img" />
          <img className="planet_surface_img" src={planet_surface_img_src} alt="" />
        </div>
        <div className="planet_information_etc">
          <div className="planetname_description">
            <h1 className="planet_name">{planet_name}</h1>
            <p>{planet_description}</p>
            <span>
              Source: {"  "}
              <a href={wiki_link}>
                <strong>{wiki_link + " "}</strong>
                <img className="wiki_icon" src={Wiki_Icon} alt="Wiki_Icon" />
              </a>
            </span>
          </div>
          <div className="Planet_interactive_info_block_cont">
            {screenWidth > 768 ? (
              <>
                <Planet_interactive_info_block
                  onClick={onClick1}
                  bgColor={bgColor1}
                  numeric={"01"}
                  value={"OVERVIEW"}
                />
                <Planet_interactive_info_block
                  onClick={onClick2}
                  bgColor={bgColor2}
                  numeric={"02"}
                  value={"Internal Structure"}
                />
                <Planet_interactive_info_block
                  onClick={onClick3}
                  bgColor={bgColor3}
                  numeric={"03"}
                  value={"Surface Geology"}
                />
              </>
            ) : null}
          </div>
        </div>
      </div>

      <div className="facts">
        <Planet_facts parameter={"ROTATION TIME"} fact={rotation_time} />
        <Planet_facts parameter={"REVOLUTION TIME"} fact={revolutin_time} />
        <Planet_facts parameter={"RADIUS"} fact={radius} />
        <Planet_facts parameter={"AVERAGE TEMP."} fact={avarage_temp} />
      </div>
    </>
  );
};

export default Planet_info;
