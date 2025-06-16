import HomeCard from "../Home Comp/HomeCard";
const cases = [
  {
    title: "Physical",
    caseLink: "/copperPhysical",
    backgroundImage:
      "https://www.lequotidien.com.tn/images/Bureau-etude-fibre-optique-1024x683.jpg",
  },
  {
    title: "Logical",
    caseLink: "/msan",
    backgroundImage:
      "https://louisproformations.com/wp-content/uploads/2023/08/protection-donnees-informatiques.jpg",
  },
];
function CopperCases() {
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
        <HomeCard
          caseTitle={item.title}
          caseLink={item.caseLink}
          backgroundImage={item.backgroundImage}
        />
      ))}
    </div>
  );
}

export default CopperCases;
