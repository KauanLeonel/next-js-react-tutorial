import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Aside from "@/components/Aside";
import CardUser from "@/components/CardUser";

export default function Home() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header className="md:h-[15%]"></Header>
      <div className="flex flex-col md:flex-row flex-1 w-full">
        
          <div>
            <CardUser name="spinossaur" desc="Vela dorsal" avatar="https://static.thenounproject.com/png/411113-200.png" forca = "50"/>
            <CardUser name="velocraptor" desc="Garra pontuda" avatar="https://static.thenounproject.com/png/168648-200.png" forca = "25"/>
            <CardUser name="triceratops" desc="Três chifres" avatar="https://static.thenounproject.com/png/359510-200.png" forca = "30"/>
          </div>
        
        <div
          style={styles.container}
          className="w-full md:w-[70%] bg-yellow-400 p-6"
        >
          <div className="relative">
            <div
              className="absolute inset-0 bg-[url('https://cdn.paleo.gg/games/jwpo/images/dino/carnotaurus.png)] 
    bg-center 
    bg-no-repeat 
    bg-[length:300px] 
    opacity-30"
            />

            <div className="relative z-10 p-6 text-white"></div>
          </div>
        </div>
      </div>
      <Footer className="md:h-[10%]"></Footer>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: "#85440f",
  },
  align: {
    display: "flex",
    flexDirection: "row",
  },
};
