import { FormEvent, useState } from "react";
import { Link, useHistory } from "react-router-dom";

import illustrationImg from "assets/images/illustration.svg";
import logoImg from "assets/images/logo.svg";

import { Button } from "components/Button";
import { database } from "services/firebase";
import { useAuth } from "hooks/useAuth";

import "styles/auth.scss";

export function NewRoom() {
    const { user /*, signInWithGoogle*/ } = useAuth();
    const history = useHistory();
    const [newRoow, setNewRoow] = useState("");

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if (newRoow.trim() === "") {
            return;
        }

        const roomRef = database.ref("rooms");

        const firebaseRoom = await roomRef.push({
            title: newRoow,
            authorId: user?.id,
        });

        history.push(`/room/${firebaseRoom.key}`)
    }

    return (
        <div id="page-auth">
            <aside>
                <img
                    src={illustrationImg}
                    alt="ilustração perguntas e respostas"
                />
                <strong>Crie salas de Q&A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                            onChange={(event) => setNewRoow(event.target.value)}
                            value={newRoow}
                        />
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente?{" "}
                        <Link to="/">clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}
