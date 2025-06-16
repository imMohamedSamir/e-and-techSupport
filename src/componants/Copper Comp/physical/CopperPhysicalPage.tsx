import BackgroundSlider from "../../BackgroundSlider";
import CopperPhysicalCases from "./CopperPhysicalCases";

function CopperPhysicalPage() {
  const imgUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Eand_Logo_EN.svg/1200px-Eand_Logo_EN.svg.png";
  const cases = [
    {
      url: "https://png.pngtree.com/background/20230613/original/pngtree-digital-technology-background-with-dark-lines-and-lines-picture-image_3386207.jpg",
      title: "Line Down",
      subtitle: "No internet or signal detected.",
      link: "",
    },
    {
      url: "https://i.pinimg.com/736x/2f/6d/40/2f6d406d481f6a1ad0f459adc616868a.jpg",
      title: "Voice Down",
      subtitle: "No dial tone or voice service.",
      link: "",
    },
    {
      url: "https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zODAtMDZfMS5qcGc.jpg",
      title: "Noise on Voice",
      subtitle: "Distorted or unclear voice line.",
      link: "",
    },
    {
      url: "https://png.pngtree.com/thumb_back/fh260/background/20201022/pngtree-technical-abstract-technology-background-with-geometric-shape-image_430549.jpg",
      title: "Line and Voice Down",
      subtitle: "No internet and no voice service.",
      link: "",
    },
    {
      url: "https://t3.ftcdn.net/jpg/02/13/56/78/360_F_213567841_SiyyM6H4y067caRy58iLulWazeezPaui.jpg",
      title: "Wrong Rate (BLQ)",
      subtitle: "Low internet speed or unstable rate.",
      link: "",
    },
  ];

  return (
    <div
      style={{
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
      <BackgroundSlider imgs={cases} />
      <>
        <h1 style={{ textAlign: "right", color: "white", fontSize: "2rem" }}>
          Physical Cases
        </h1>
      </>
      <CopperPhysicalCases cases={cases} />{" "}
    </div>
  );
}

export default CopperPhysicalPage;
