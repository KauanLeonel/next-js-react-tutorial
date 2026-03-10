import Logo from "./Logo";
import { GiFrogFoot } from "react-icons/gi";

export default function Header() {
  return (
    <header  style={styles.container}>
      <Logo></Logo>
      <nav>
        <ul style={styles.nav}>
          <li style={styles.logo}>
            <GiFrogFoot />
            Home
          </li>
          <li style={styles.logo}>
            <GiFrogFoot />
            Products
          </li>
          <li style={styles.logo}>
            <GiFrogFoot />
            About
          </li>
          <li style={styles.logo}>
            <GiFrogFoot />
            Contacts
          </li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  container: {
    backgroundColor: "rgb(43, 12, 0)",
    color: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  nav: {
    display: "flex",
    listStyleType: "none",
    gap: 20,
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
};
