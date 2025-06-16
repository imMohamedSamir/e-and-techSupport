import HomeCard from "../Home Comp/HomeCard";

function MsanPage() {
  const imgUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Eand_Logo_EN.svg/1200px-Eand_Logo_EN.svg.png";
  const cases = [
    { title: "Line down", caseLink: "/copper" },
    { title: "voice down", caseLink: "/msan" },
    { title: "noise on voice", caseLink: "/ftth" },
    { title: "Line and voice down", caseLink: "/ftth" },

    { title: "BLQ", caseLink: "/ftth" },
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${imgUrl})`,
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
      {/* Centered Title */}

      <>
        <h1 style={{ textAlign: "right", color: "white", fontSize: "2rem" }}>
          MSAN (FTTC)
        </h1>
        <h1 style={{ textAlign: "right", color: "white", fontSize: "1.2rem" }}>
          MSAN (FTTC) حالات اعطال ال
        </h1>
        <div
          style={{
            position: "absolute",
            bottom: "20px",
            right: "20px",
            display: "flex",
            gap: "16px",
          }}
        >
          {cases.map((item) => (
            <HomeCard caseTitle={item.title} caseLink={item.caseLink} />
          ))}
        </div>
      </>
    </div>
  );
}

export default MsanPage;
