import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Aside from "@/components/Aside";

const nome = "Kauan Leonel";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header></Header>
      <div
        className="flex flex-col md:flex-row flex-1 w-full"
        style={styles.align}
      >
        <Aside></Aside>
        <div
          style={styles.container}
          className="w-full md:w-[70%] bg-yellow-400 p-6"
        >
          <div
  
            className="bg-[url(https://upload.wikimedia.org/wikipedia/commons/f/f0/FSAC-KK-11888.jpg)] bg-[length:50%] h-screen bg-repeat"
          >
            Conteúdo
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#ffd900",
  },
  align: {
    display: "flex",
    flexDirection: "row",
  },
};
