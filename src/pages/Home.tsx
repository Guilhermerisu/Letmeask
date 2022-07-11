import { useHistory } from "react-router-dom";
import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import googleIcon from "../assets/images/google-icon.svg";

import "../styles/auth.scss";
import { Button } from "../components/button";
import { useAuth } from "../hooks/useAuth";

export function Home() {
  let history = useHistory();
  const { signInWithGoogle, user } = useAuth();

  async function signIn() {
    if (!user) {
      await signInWithGoogle();
    }
    history.push("/rooms/new");
  }

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
          <form>
            <input type="text" placeholder="Digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  );
}
