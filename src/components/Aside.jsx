
export default function Aside() {
  return (
    <aside style={styles.container} className="w-[30%]">
      <h1>Eu sou a barra lateral</h1>
    </aside>
  );
}

const styles ={
    container:{
        backgroundColor: "#00ff15",
    }
};