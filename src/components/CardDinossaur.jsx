"use client";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function CardDinossaur(props) {
  const [tourn, setTourn] = useState(true);
  const [heart, setHeaert] = useState(false);

  // Função para lidar com o clique no coração sem virar o card
  const handleHeartClick = (e) => {
    e.stopPropagation(); // Impede que o clique chegue no card e o faça virar
    setHeaert(!heart);
  };

  return (
    <div style={styles.wrapper} onClick={() => setTourn(!tourn)}>
      <div
        style={{
          ...styles.card,
          transform: tourn ? "rotateY(0deg)" : "rotateY(180deg)",
        }}
      >
        {/* Frente */}
        <div style={styles.front}>
          {/* Botão do Coração Posicionado, Sobreposto e Semi-transparente */}
          <div style={styles.heartCircle} onClick={handleHeartClick}>
            <FaHeart color={heart ? "red" : "white"} size={16} />
          </div>

          <img src={props.avatar} alt={props.name} style={styles.image} />

          <h2 style={styles.name}>{props.name}</h2>

          <div style={styles.category}>{props.category}</div>

          <div style={styles.strength}>Strength: {props.strength}</div>
        </div>

        {/* Verso */}
        <div style={styles.back}>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  // ... (seus estilos anteriores mantidos)
  wrapper: {
    perspective: "1000px",
    width: "180px",
    height: "360px",
    // margin: "20px", // Adicionei uma margem externa para o círculo não encostar na borda da tela
  },

  card: {
    width: "100%",
    height: "100%",
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s",
    cursor: "pointer",
  },

  front: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    padding: "20px",
    border: "1px solid black",
    borderRadius: 10,
    backgroundColor: "#a36e3181",
    // É importante NÃO TER overflow: "hidden" aqui para o círculo aparecer fora
  },

  // NOVO ESTILO: O círculo sobreposto e semi-transparente
  heartCircle: {
    position: "absolute",
    // Valores negativos fazem ele sair para fora da borda
    top: "-15px", 
    right: "-15px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    // Marrom claro com transparência (rgba: red, green, blue, alpha)
    backgroundColor: "rgba(210, 166, 121, 0.7)", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    // Z-index alto garante que ele fique sobre o cartão
    zIndex: 10,
    // Uma sombra suave para dar destaque
    boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
  },

  back: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    transform: "rotateY(180deg)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    border: "1px solid black",
    borderRadius: 10,
    backgroundColor: "#4e2102",
    color: "white",
    textAlign: "center",
  },

  image: {
    width: 80,
    marginTop: "20px", // Aumentei o espaço no topo por causa do coração
  },

  name: {
    fontSize: "20px",
    fontWeight: "bold",
  },

  category: {
    backgroundColor: "#804800",
    color: "#fff",
    padding: "6px 12px",
    borderRadius: 6,
    fontSize: "15px",
  },

  strength: {
    backgroundColor: "#4e2102",
    color: "white",
    padding: "6px 12px",
    borderRadius: 6,
    fontWeight: "bold",
  },
};