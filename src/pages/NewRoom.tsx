import illustration from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";

import "../styles/auth.scss";
import { Button } from "../components/button";
import { Link } from "react-router-dom";
// import { useAuth } from "../hooks/useAuth";

export function NewRoom() {
  // const { user } = useAuth();

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
          <form>
            <input type="text" placeholder="Novo da sala" />
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
