import BackgroundSlider from "../componants/BackgroundSlider";
import HomeDsc from "../componants/Home Comp/HomeDsc";
import HomeCardsSec from "../componants/Home Comp/HomeCardsSec";
import Navbar from "../componants/Home Comp/Navbar";

export default function HomePage() {
  return (
    <div
      style={{
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
      <Navbar />
      <BackgroundSlider />
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
        }}
      >
        {/* <img src={imgUrl} style={{ width: "200px", height: "auto" }} /> */}
      </div>
      <HomeDsc />
      <div
        style={{
          position: "fixed",
          display: "flex",
          flexDirection: "column",
        }}
      ></div>
      <HomeCardsSec />
    </div>
  );
}
