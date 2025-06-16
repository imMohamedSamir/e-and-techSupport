import HomeCard from "./HomeCard";
const cases = [
  {
    title: "Copper",
    caseLink: "/copper",
    backgroundImage:
      "https://uk.prysmian.com/sites/default/files/thumbnails/image/iStock-144349803.jpg",
  },
  {
    title: "MSAN (FTTC)",
    caseLink: "/msan",
    backgroundImage:
      "https://dailynews.co.tz/wp-content/uploads/2022/12/fiber-optic-ethernet-cable-1024x576-1.jpeg",
  },
  {
    title: "FTTH",
    caseLink: "/ftth",
    backgroundImage:
      "https://all-techcommunications.ca/wp-content/uploads/2021/11/optical-fiber-cable.jpg",
  },
];
function HomeCardsSec() {
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

export default HomeCardsSec;
