"use client";

import { FaUserEdit } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { useState } from "react";

export default function CardUser(props) {
  const [modal, setModal] = useState(false);

  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [pass, setPass] = useState("");
  const [avatar, setAvatar] = useState(props.avatar);

  const handleDelete = async () => {
    console.log("Deletar user", props.id);
    const response = await fetch(`http://localhost:3333/user/${props.id}`, {
      method: "DELETE",
    });
    const data = (await response?.json()) || {};
    if (response.ok) {
      alert("Usuário deletado com sucesso", data);
      const usersUpdated = props.users.filter(user => user.id !== props.id);

      props.setUsers(usersUpdated);
    } else {
      alert("Usuário deletado sem sucesso", data);
    }
  };

  const handleSubmite = async (e) => {
    e.preventDefault();
     console.log("Deletar user", props.id);
    const response = await fetch(`http://localhost:3333/user/${props.id}`, {
      method: "PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name : name,
        email : email,
        ...(props.pass ? {pass: props.pass} : {}),
        avatar: avatar
      })
    });
    const data = (await response?.json()) || {};
    if (response.ok) {
      alert("Usuário atualizado com sucesso", data);
      const usersUpdated = props.users.map(user =>{
        if(user.id === props.id){
          return {
            ...user,
            name : name,
            email : email,
            avatar : avatar
          }
        }
        return user;
      })
      props.setUsers(usersUpdated)

    } else {
      alert("Usuário atualizado sem sucesso", data);
    }
    setModal(false)
  };

  return (
    <div style={styles.container}>
      <img src={props.avatar} alt={props.name} style={styles.image} />
      <div>
        <div style={styles.actions}>
          <FaUserEdit style={styles.icons} onClick={() => setModal(true)} />
          <FaTrash style={styles.icons} onClick={handleDelete} />
        </div>
        <div>
          {" "}
          <h2>{props.name}</h2>
          <p>{props.email}</p>
        </div>

        {modal && (
          <>
            {/* Removi a </div> que estava aqui em cima */}
            <div style={styles.modal}>
              <div style={styles.content}>
                <h2 >Editar usuário</h2>

                <form style={styles.form} onSubmit={handleSubmite}>
                  <label htmlFor="name">Nome:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={styles.textInput}
                  />

                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={styles.textInput}
                  />

                  <label htmlFor="password">Senha:</label>
                  <input
                    type="password"
                    id="password"
                    name="pass"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    style={styles.textInput}
                  />

                  <label htmlFor="avatar">Avatar:</label>
                  <input
                    type="text"
                    id="avatar"
                    name="avatar"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                    style={styles.textInput}
                  />

                  {/* Movi o botão de ação principal para dentro do form */}
                  <button type="submit" style={styles.button} >
                    Editar{" "}
                  </button>

                  {/* Opcional: botão para fechar o modal */}
                  <button
                    type="button"
                    onClick={() => setModal(false)}
                    style={styles.button}
                  >
                    Cancelar
                  </button>
                </form>
              </div>
            </div>
          </>
        )}
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
    position: "relative",
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

  actions: {
    position: "absolute",
    top: 10,
    right: 10,
    display: "flex",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  icons: {
    cursor: "pointer",
    color: "#000000",
    width: 25,
    height: 25,
    padding: 5,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    width: 300,
    marginTop: 30,
        

    
  },
  textInput: {
    padding: 6,
    marginBottom: 4,
    color: "#fff",
    border: "1px solid #000000",
    borderRadius: 6,
  },
 modal: {
  
        position: "fixed", // Mudado de absolute para fixed
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.7)", // Um pouco mais escuro para foco
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000
    },
    content: {
        backgroundColor: "#924b10",
        padding: "30px",
        borderRadius: "12px",
        width: "90%",
        maxWidth: "400px",
        color: "#333" // Garante que o texto fique visível se o fundo for escuro
    },
    button:{
          cursor: "pointer",
              backgroundColor: "#da811b81",


    }
};
