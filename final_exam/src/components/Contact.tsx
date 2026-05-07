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

                <div className="w-[90%] md:w-[380px] mt-[20px] flex flex-col gap-3 p-6 rounded-2xl border-[1.5px] border-[#dce8f7] bg-[#f4f7fc]">
                    <h2 className="text-xl font-medium mb-1" style={{ color: "var(--special-text)" }}>
                        Inviaci un messaggio
                    </h2>

                    <div className="flex flex-col gap-1.5">
                        <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--special-text)" }}>Nome</span>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Insert name"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white text-[#000824] text-sm outline-none border-[1.5px] border-[#b8d0f0] focus:border-[var(--special-text)] transition-colors placeholder:text-[#aac0db]"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--special-text)" }}>Email</span>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Insert email"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white text-[#000824] text-sm outline-none border-[1.5px] border-[#b8d0f0] focus:border-[var(--special-text)] transition-colors placeholder:text-[#aac0db]"
                        />
                    </div>

                    <div className="flex flex-col gap-1.5">
                        <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--special-text)" }}>Messaggio</span>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Insert message"
                            className="w-full resize-none h-[180px] px-3.5 py-2.5 rounded-xl bg-white text-[#000824] text-sm outline-none border-[1.5px] border-[#b8d0f0] focus:border-[var(--special-text)] transition-colors placeholder:text-[#aac0db]"
                        />
                    </div>

                    <button
                        onClick={() => addM(name, email, message)}
                        style={{ backgroundColor: "var(--special-text)", borderColor: "var(--special-text)" }}
                        className="w-full py-2.5 rounded-xl text-white text-sm font-medium border-[1.5px] transition-all duration-300 hover:opacity-80 mt-1"
                    >
                        Send!
                    </button>
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