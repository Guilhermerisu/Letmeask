import { FormEvent, useState } from "react";

import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";

import "../styles/auth.scss";
import Button from "../components/Button";
import { Link, useHistory } from "react-router-dom";
import { database } from "../services/firebase";
import { useAuth } from "../hooks/useAuth";

export function NewRoom() {
  const { user } = useAuth();
  const [newRoom, setNewRoom] = useState("");
  const history = useHistory();

  const handleCreateRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (newRoom.trim() === "") {
      return;
    }

    const roomRef = database.ref("rooms");
    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });
    history.push(`/rooms/${firebaseRoom.key}`);
  };
  return (
    <div className="page-auth">
      <aside>
        <img src={illustration} alt="Ilustração" />
        <strong>Crie salas de Q&A ao vivo</strong>
        <p>Tire dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logo} alt="Logo" />
          <h2>Crie uma nova sala</h2>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da sala"
              onChange={(text) => setNewRoom(text.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar sala</Button>
          </form>
          <p>
            Entrar em uma sala existente? <Link to="/">clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  );
}
