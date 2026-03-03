import Logo from "./Logo";

export default function Header() {
  return (
    <header className="h-[1%]" style={styles.container}>
      <Logo></Logo>
      <nav>
        <ul style={styles.nav}>
          <li>Home</li>
          <li>Products</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
      </nav>
    </header>
  );
}

const styles = {
  container: {
    backgroundColor: "rgb(255, 0, 191)",
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
};
