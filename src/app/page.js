import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Aside from "@/components/Aside"

const nome = "Kauan Leonel";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <Header></Header>
      <div className="h-[75%] w-[100%]" style={styles.align}>
      <Aside></Aside>
      <div style={styles.container} className="w-[70%]">
        <h1> Se perguntarem o que é o amor - {nome}</h1></div>
      
      </div>
      <Footer></Footer>
    </div>
  );
}

const styles = {
  container : {
    backgroundColor : "#ffd900"
  },
  align :{
    display: "flex",
    flexDirection: "row"
  }
}