import { useDispatch } from "react-redux"
import { useState } from "react"
import { add } from "../store/sliceMessages"
import { ToastContainer, toast } from "react-toastify"

export default function Contact() {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function addM(name: string, email: string, message: string, id: number = Date.now()) {
        if (name != "" && email != "" && message != "") {
            dispatch(add({name, email, message, id}));
            toast.success("Messaggio inviato con successo!", {
                position: "bottom-right",
                autoClose: 2000,
                theme: "dark",
                style: { background: "#000824", border: "1px solid #0057bb33", color: "white" }
            });
            setName("");
            setEmail("");
            setMessage("");
        } else {
            toast.error("Devi compilare tutti i campi!", {
                position: "bottom-right",
                autoClose: 2000,
                theme: "dark",
                style: { background: "#000824", border: "1px solid #0057bb33", color: "white" }
            });
        }
    }

    return (
        <>
            <div className="w-[100%] flex flex-col justify-center items-center text-center bg-[var(--text)]">
                <ToastContainer />
                <h2 className="text-[50px] font-bold text-[var(--special-text)]">Contattaci</h2>

                <p className="w-[90%] md:w-[50%] italic">
                    Hai bisogno di informazioni su un prodotto, una spedizione o il tuo ordine?
                    Il nostro team è sempre disponibile per aiutarti.
                    <br /><br />

                    Per qualsiasi domanda puoi contattarci tramite email oppure attraverso
                    i nostri canali social. Cerchiamo di rispondere a tutte le richieste
                    nel minor tempo possibile.
                    <br /><br />

                    Che tu abbia bisogno di supporto, consigli sui prodotti o semplicemente
                    voglia saperne di più sul nostro store, saremo felici di aiutarti.
                </p>

                <div className="md:w-[350px] w-[90%] flex flex-col gap-[10px] justify-center items-center p-[20px] bg-[var(--bg)] mt-[20px] border border-none rounded-[10px]">
                    <h1 className="text-[var(--special-text)] text-[20px] font-bold">Inviaci un messaggio</h1>
                    <input className="w-[100%] p-[10px] border border-[var(--text)] bg-[transparent] text-[15px] text-[var(--text)] outline-none rounded-[10px] transition-all duration-[400ms] focus:bg-[var(--text)] focus:text-[var(--special-text)]" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Insert name" />
                    <input className="w-[100%] p-[10px] border border-[var(--text)] bg-[transparent] text-[15px] text-[var(--text)] outline-none rounded-[10px] transition-all duration-[400ms] focus:bg-[var(--text)] focus:text-[var(--special-text)]" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Insert email" />
                    <textarea className="w-[100%] resize-none h-[200px] p-[10px] border border-[var(--text)] bg-[transparent] text-[15px] text-[var(--text)] outline-none rounded-[10px] transition-all duration-[400ms] focus:bg-[var(--text)] focus:text-[var(--special-text)]" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Insert message"></textarea>
                    <button className="w-[100%] p-[10px] border border-[var(--text)] bg-[var(--text)] text-[15px] text-[var(--special-text)] outline-none rounded-[10px] transition-all duration-[400ms] hover:bg-[var(--special-text)] hover:text-[var(--text)]" onClick={() => addM(name, email, message)}>Send!</button>
                </div>

                <div className="md:w-[350px] w-[90%] border p-[10px] border-[var(--special-text)] text-[var(--special-text)] flex flex-col justify-center items-center gap-[10px] rounded-[10px] mt-[20px] mb-[50px] font-bold">
                    <span>Email: support@yourstore.com</span>
                    <span>Telefono: +39 123 456 7890</span>
                    <span>Instagram: @yourstore</span>
                </div>
            </div>
        </>
    )
}