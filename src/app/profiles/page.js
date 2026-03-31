"use client";

import { useState } from "react";
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CardUser from "@/components/CardUser";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const response = await fetch("http://localhost:3333/user ");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setUsers(data.users);
      } else {
        const data = await response?.json();
        console.log(data);
      }
    };
    getUsers();
    setIsLoading(false);
  }, []);
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
            {isLoading ? <p>Carregando</p> : 
              users.map(user => <CardUser 
                key= {user.id}
                avatar = {user.avatar}
                name = {user.name}
                email = {user.email}
                id = {user.id}
                users = {users}
                setUsers = {setUsers}
                />)
            }
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
