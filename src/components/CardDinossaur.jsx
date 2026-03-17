"use client";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

export default function CardDinossaur(props) {
  const [tourn, setTourn] = useState(true);
  const [heart, setHeaert] = useState(false);

  return (
    <div style={styles.container}>
      <div>
        {heart ? (
        <FaHeart
        border = "1px black"
          onClick={() => {
            setHeaert(!heart);
          }}
        />
        ) : (
        <FaHeart
          color="red"
          onClick={() => {
            setHeaert(!heart);
          }}
        />
        ) }
      </div>
      {tourn ? (
        <>
          <div>
            <img src={props.avatar} alt={props.name} style={styles.image} />
          </div>

          <h2 style={styles.name}>{props.name}</h2>

          <div style={styles.category}>{props.category}</div>

          <div style={styles.strength}>Strength: {props.strength}</div>
        </>
      ) : (
        <div style={styles.strength}> {props.desc}</div>
      )}

      <button
        type="button"
        style={styles.strength}
        onClick={() => {
          setTourn(!tourn);
        }}
      >
        Adicionar
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
};
