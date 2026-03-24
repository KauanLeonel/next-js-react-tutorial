export default function CardUser(props) {
  return (
    <div style={styles.container}>
      <img src={props.avatar} alt={props.name} style={styles.image} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "350px",
    height: "120px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    padding: "20px",
    border: "1px solid #000000",
    borderRadius: 8,
    backgroundColor: "#da811b81",
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    //filter: "invert(100%)"
  },

  section: {
    borderRadius: "1px",
  },
};
