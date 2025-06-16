import HomeCard from "../Home Comp/HomeCard";
const cases = [
  { title: "Line down", caseLink: "" },
  { title: "voice down", caseLink: "" },
  { title: "noise on voice", caseLink: "" },
  { title: "BLQ", caseLink: "" },
];
function CopperCardSec() {
  return (
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
  );
}

export default CopperCardSec;
