import HomeCard from "../../Home Comp/HomeCard";
type caseModel = {
  url: string;
  title: string;
  subtitle: string;
  link?: string;
};

type caseProps = {
  cases?: caseModel[];
};
function CopperPhysicalCases({ cases = [] }: caseProps) {
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
          caseLink={item.link}
          backgroundImage={item.url}
        />
      ))}
    </div>
  );
}

export default CopperPhysicalCases;
