
export default function Aside({children}) {
  return (
    <aside style={styles.container} className="w-[30%]">
       <div className="bg-[url('/pegada.svg')] bg-cover bg-center bg-no-repeat h-screen w-full ">
      <div style={styles.card}>{children}</div>
      
       </div>
    </aside>
  );
}

const styles ={
    container:{
        backgroundColor: "rgb(71, 25, 6)",
    },
    card:{
      padding: "10px"
    }
};