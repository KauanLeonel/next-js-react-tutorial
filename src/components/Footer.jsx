import Logo from "./Logo";

export default function Footer() {
  return (
    <footer style={styles.container}>
      <Logo></Logo> 
    </footer>
  );
}

const styles ={
    container:{
        backgroundColor: "rgb(43, 12, 0)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    }
};