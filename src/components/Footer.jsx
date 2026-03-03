import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="h-[10%]" style={styles.container}>
      <Logo></Logo> 
      <div> Teste</div>
    </footer>
  );
}

const styles ={
    container:{
        backgroundColor: "#3700ff",
    }
};