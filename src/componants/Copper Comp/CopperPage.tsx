import BackgroundSlider from "../BackgroundSlider";
import CopperCases from "./CopperCases";
const imgUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Eand_Logo_EN.svg/1200px-Eand_Logo_EN.svg.png";
const imgs = [
  {
    url: "https://www.lequotidien.com.tn/images/Bureau-etude-fibre-optique-1024x683.jpg",
    title: "Physical Copper Issues",
    subtitle: "Explore the various physical cases and their solutions.",
  },
  {
    url: "https://louisproformations.com/wp-content/uploads/2023/08/protection-donnees-informatiques.jpg",
    title: "Logical Copper Issues",
    subtitle: "Understanding logical issues in copper networks.",
  },
];
function CopperPage() {
  return (
    <div
      style={{
        // backgroundImage: `url(${imgUrl})`,
        backgroundPositionX: "start",
        backgroundSize: "20% auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "90vh",
        width: "90vw",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "fixed",
          top: "5px",
          left: "30px",
          // transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        <img
          src={imgUrl}
          style={{
            width: "100px ",
            height: "100px ",
          }}
        />
      </div>
      <BackgroundSlider imgs={imgs} />
      <>
        <h1 style={{ textAlign: "right", color: "white", fontSize: "2rem" }}>
          Copper Cases
        </h1>
        <h1 style={{ textAlign: "right", color: "white", fontSize: "1.2rem" }}>
          حالات اعطال النحاس
        </h1>
      </>
      <CopperCases />{" "}
    </div>
  );
}

export default CopperPage;
