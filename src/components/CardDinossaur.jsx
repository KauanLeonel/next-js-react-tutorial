"use client";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function CardDinossaur(props) {
  const [tourn, setTourn] = useState(true);
  const [heart, setHeaert] = useState(false);

  return (
    <div style={styles.wrapper}>
      <div
        style={{
          ...styles.card,
          transform: tourn ? "rotateY(0deg)" : "rotateY(180deg)",
        }}
      >
        {/* Frente */}
        <div style={styles.front}>
          <FaHeart
            color={heart ? "red" : "gray"}
            onClick={() => setHeaert(!heart)}
          />

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

      <button onClick={() => setTourn(!tourn)} style={styles.button}>
        Virar
      </button>
    </div>
  );
}

const styles = {
  container: {
    width: "180px",
    height: "330px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
    padding: "20px",
    border: "1px solid black",
    borderRadius: 10,
    backgroundColor: "#a36e3181",
  },

  imageBox: {
    width: 120,
    height: 120,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#642800",
    borderRadius: 8,
  },

  image: {
    width: 80,
    //filter: "invert(100%)",
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
  wrapper: {
    perspective: "1000px",
    width: "180px",
    height: "360px",
  },

  card: {
    width: "100%",
    height: "100%",
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform 0.6s",
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

  button: {
    marginTop: "10px",
    padding: "6px 12px",
    borderRadius: "8px",
    backgroundColor: "#5c2e0c",
    color: "white",
    cursor: "pointer",
    border: "none",
  },
};
