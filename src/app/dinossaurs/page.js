import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardDinossaur from "@/components/CardDinossaur";

export default function Home() {
  return (
    // min-h-screen garante que o fundo cubra a tela toda, mas permite crescer se tiver muito card
    <div className="flex flex-col min-h-screen">
      
      {/* Header: Altura automática no mobile, fixa se desejar no desktop */}
      <Header className="w-full py-4 md:h-[15%]" />

      {/* Main Container: No mobile empilha (col), no desktop fica lado a lado (row) */}
      <main className="flex flex-col md:flex-row flex-1 w-full bg-[#85440f]">
        
        {/* Grid de Cards: O 'flex-1' faz ele ocupar o espaço que sobrar */}
        <div className="flex-1 p-6">
          <div className="flex flex-row flex-wrap justify-center md:justify-start gap-6">
            <CardDinossaur
              name="Spinossaur"
              avatar="  https://i.pinimg.com/474x/bc/a2/cd/bca2cd6fbe272888ae218fdb2224867f.jpg"
              strength="50"
              category="Terópode"
              desc = "Possui uma enorme vela nas costas, nadador habilidoso, misto de terrestre e aquático."
            />
            <CardDinossaur
              name="Velociraptor"
              avatar="https://i.pinimg.com/originals/40/ed/25/40ed25032222abfc47539fa18f1bc87a.png"
              strength="25"
              category="Terópode"
              desc = "Pequeno, rápido, caçador em bando, conhecido por garras afiadas e estratégia de caça."
            />
            <CardDinossaur
              name="Triceratops"
              avatar="https://i.pinimg.com/474x/96/38/ea/9638ea8558c3f2ac83fd53f0debf23fe.jpg"
              strength="30"
              category="Ceratopsídeo"
              desc = "Possui três chifres e uma gola óssea; defensor natural, forte e resistente."
            />
            
          </div>
        </div>


      </main>

      <Footer className="w-full py-4 md:h-[10%]" />
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
  cards: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    width: "100%",
  },
};
