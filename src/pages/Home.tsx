import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import googleIcon from "../assets/images/google-icon.svg";
import "../styles/auth.scss";
import Button from "../components/Button";
import { useAuth } from "../hooks/useAuth";
import { database } from "../services/firebase";

export function Home() {
  let history = useHistory();
  const { signInWithGoogle, user } = useAuth();
  const [roomCode, setRoomCode] = useState("");

  const signIn = async () => {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  };

  const handleJoinRoom = async (event: FormEvent) => {
    event.preventDefault();

    if (roomCode.trim() === "") {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert("Room doesn't exists");
      return;
    }
    history.push(`/rooms/${roomCode}`);
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
          <button className="create-room" onClick={signIn}>
            <img src={googleIcon} alt="Google Icon" />
            Crie sua sala com o Google
          </button>
          <div className="separator">ou entre em um sala</div>
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={(text) => setRoomCode(text.target.value)}
              value={roomCode}
            />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
