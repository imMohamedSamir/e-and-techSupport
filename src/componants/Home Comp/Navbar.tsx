// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import Spacer from "../spacer";

export default function Navbar() {
  const imgUrl =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Eand_Logo_EN.svg/1200px-Eand_Logo_EN.svg.png";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "70px",
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "0 24px",
        zIndex: 100,
      }}
    >
      <img src={imgUrl} alt="Logo" style={{ height: "60px", width: "60px" }} />
      <Spacer width={16} />
      <div style={{ display: "flex", gap: "20px" }}>
        <Link to="/" style={navLinkStyle}>
          1st Line
        </Link>
        <Link to="/" style={navLinkStyle}>
          2nd Line
        </Link>
      </div>
    </nav>
  );
}

const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.3rem",
  transition: "color 0.3s",
};
