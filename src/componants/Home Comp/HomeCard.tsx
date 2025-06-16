import { useNavigate } from "react-router-dom";
import styles from "../../styles/homeStyles.module.css";
type HomeCardProps = {
  caseTitle: string;
  caseLink?: string;
  backgroundImage?: string;
};
function HomeCard(props: HomeCardProps) {
  const navigate = useNavigate();
  return (
    <button
      key={props.caseTitle}
      className={styles.homeCard}
      type="button"
      onClick={() => {
        if (props.caseLink !== "") {
          navigate(props.caseLink || "/");
        } else {
          console.warn("No case link provided for:", props.caseLink);
        }
      }}
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
      }}
    >
      {props.caseTitle}
    </button>
  );
}

export default HomeCard;
