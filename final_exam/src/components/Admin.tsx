import { useDispatch, useSelector } from "react-redux"
import { addProduct, deleteProduct, updateProduct } from "../store/sliceProdotti"
import type { RootType, AppDispatch } from "../store/store"
import { useState } from "react";
import type { product } from "../types/prod";
import { ToastContainer, toast } from "react-toastify";
import { remove } from "../store/sliceMessages";

export default function Admin() {
    const dispatch = useDispatch<AppDispatch>();
    const list = useSelector((state: RootType) => state.prod.list);

    const messages = useSelector((state: RootType) => state.messages.messages);

    const [newName, setNewName] = useState("");
    const [newDescription, setNewDescription] = useState("");
    const [newCategory, setNewCategory] = useState("Vestiti");
    const [newCost, setNewCost] = useState(0);

    const [updateId, setUpdateId] = useState<number | null>(null);
    const [updateName, setUpdateName] = useState("");
    const [updateDescription, setUpdateDescription] = useState("");
    const [updateCategory, setUpdateCategory] = useState("Vestiti");
    const [updateCost, setUpdateCost] = useState(0);

    const toastOptions = {
        position: "bottom-right" as const,
        autoClose: 2000,
        theme: "dark" as const,
        style: { background: "#000824", border: "1px solid #0057bb33", color: "white" }
    };

    function addP(name: string, description: string, category: string, cost: number) {
        if (!name.trim() || !description.trim() || cost <= 0) {
            toast.error("Compila tutti i campi correttamente!", toastOptions);
            return;
        }
        dispatch(addProduct({ id: Date.now(), name, description, category, cost }));
        setNewName(""); setNewCategory("Vestiti"); setNewCost(0); setNewDescription("");
        toast.success("Prodotto aggiunto con successo!", toastOptions);
    }

    function selectForUpdate(p: product) {
        setUpdateId(null);
        setTimeout(() => {
            setUpdateId(p.id);
            setUpdateName(p.name);
            setUpdateDescription(p.description);
            setUpdateCategory(p.category);
            setUpdateCost(p.cost);
        }, 0);
    }

    function updateP() {
        if (updateId === null) return;
        if (!updateName.trim() || !updateDescription.trim() || updateCost <= 0) {
            toast.error("Compila tutti i campi correttamente!", toastOptions);
            return;
        }
        dispatch(updateProduct({ id: updateId, name: updateName, description: updateDescription, category: updateCategory, cost: updateCost }));
        setUpdateId(null);
        setUpdateName(""); setUpdateCategory("Vestiti"); setUpdateCost(0); setUpdateDescription("");
        toast.success("Prodotto aggiornato con successo!", toastOptions);
    }

    function deleteP(id: number) {
        if (updateId === id) setUpdateId(null);
        dispatch(deleteProduct(id));
        toast.success("Prodotto eliminato con successo!", toastOptions);
    }

    return (
        <div className="w-[100%] min-h-screen p-[20px] flex flex-col justify-center items-center gap-[10px]">
            <ToastContainer />

            <h1 className="text-[var(--special-text)] text-[30px] font-bold">Admin Panel</h1>

            <div className="flex flex-col justify-center items-center p-[20px] gap-[10px]">
                <h1 className="text-[var(--special-text)] text-[20px] font-bold">Messages</h1>
                {
                    messages.length > 0 ?
                    messages.map((m, i) => (
                        <div className="flex flex-col p-[20px] gap-[10px] justify-center items-center text-center w-[100%] md:max-w-[500px] bg-[var(--bg)] text-[var(--text)] border border-[var(--bg)] rounded-[10px]" key={i}>
                            <div className=""><span className="font-bold text-[var(--special-text)]">Name: </span>{m.name}</div>
                            <div className=""><span className="font-bold text-[var(--special-text)]">Email: </span><a className="underline" href={`mailto:${m.email.trim()}`}>{m.email}</a></div>
                            <div className=""><span className="font-bold text-[var(--special-text)]">Message: </span>{m.message}</div>
                            <button onClick={() => dispatch(remove(m.id))} className="p-[10px] w-[100%] bg-[var(--special-text)] border border-[var(--special-text)] rounded-[10px] transition-all duration-[400ms] hover:bg-[transparent] hover:text-[var(--special-text)]">Remove</button>
                        </div>
                    ))
                    :
                    <p className="font-bold text-[var(--special-text)]">
                        Non ci sono messaggi
                    </p>
                }
            </div>

            <div className="md:w-[500px] w-[100%] flex flex-col justify-center items-center gap-[10px] p-[20px] border border-[#0057bb33] rounded-[10px]">
                <h2 className="text-[var(--special-text)] text-[20px] font-bold">Aggiungi prodotto</h2>
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Nome" className="w-[100%] p-[10px] text-[var(--text)] bg-[var(--bg)] border border-[#0057bb33] rounded-[10px] outline-none focus:border-[var(--special-text)] transition-all duration-[400ms]" />
                <textarea value={newDescription} onChange={(e) => setNewDescription(e.target.value)} placeholder="Descrizione" className="w-[100%] p-[10px] text-[var(--text)] bg-[var(--bg)] border border-[#0057bb33] rounded-[10px] outline-none focus:border-[var(--special-text)] transition-all duration-[400ms] resize-none" rows={3} />
                <div className="relative w-[100%]">
                    <select value={newCategory} onChange={(e) => setNewCategory(e.target.value)} className="w-[100%] p-[10px] text-[var(--text)] bg-[var(--bg)] border border-[#0057bb33] rounded-[10px] outline-none focus:border-[var(--special-text)] transition-all duration-[400ms] appearance-none cursor-pointer">
                        <option value="Vestiti">Vestiti</option>
                        <option value="Accessori">Accessori</option>
                        <option value="Scarpe">Scarpe</option>
                    </select>
                    <span className="absolute right-[10px] top-[50%] translate-y-[-50%] text-[var(--special-text)] pointer-events-none">▼</span>
                </div>
                <input type="number" value={newCost} onChange={(e) => setNewCost(Number(e.target.value))} placeholder="Prezzo" className="w-[100%] p-[10px] text-[var(--text)] bg-[var(--bg)] border border-[#0057bb33] rounded-[10px] outline-none focus:border-[var(--special-text)] transition-all duration-[400ms]" />
                <button onClick={() => addP(newName, newDescription, newCategory, newCost)} className="w-[100%] p-[10px] text-[var(--special-text)] border border-[var(--special-text)] rounded-[10px] transition-all duration-[400ms] hover:bg-[var(--special-text)] hover:text-[var(--text)]">
                    + Aggiungi prodotto
                </button>
            </div>

            {updateId !== null && (
                <div className="md:w-[500px] w-[100%] flex flex-col justify-center items-center gap-[10px] p-[20px] border border-[var(--special-text)] rounded-[10px]">
                    <div className="w-[100%] flex justify-between items-center">
                        <h2 className="text-[var(--special-text)] text-[20px] font-bold">Modifica prodotto</h2>
                        <span onClick={() => setUpdateId(null)} className="text-[var(--special-text)] opacity-50 hover:opacity-100 cursor-pointer transition-all duration-[400ms]">✕ Annulla</span>
                    </div>
                    <input type="text" value={updateName} onChange={(e) => setUpdateName(e.target.value)} placeholder="Nome" className="w-[100%] p-[10px] text-[var(--text)] bg-[var(--bg)] border border-[#0057bb33] rounded-[10px] outline-none focus:border-[var(--special-text)] transition-all duration-[400ms]" />
                    <textarea value={updateDescription} onChange={(e) => setUpdateDescription(e.target.value)} placeholder="Descrizione" className="w-[100%] p-[10px] text-[var(--text)] bg-[var(--bg)] border border-[#0057bb33] rounded-[10px] outline-none focus:border-[var(--special-text)] transition-all duration-[400ms] resize-none" rows={3} />
                    <div className="relative w-[100%]">
                        <select value={updateCategory} onChange={(e) => setUpdateCategory(e.target.value)} className="w-[100%] p-[10px] text-[var(--text)] bg-[var(--bg)] border border-[#0057bb33] rounded-[10px] outline-none focus:border-[var(--special-text)] transition-all duration-[400ms] appearance-none cursor-pointer">
                            <option value="Vestiti">Vestiti</option>
                            <option value="Accessori">Accessori</option>
                            <option value="Scarpe">Scarpe</option>
                        </select>
                        <span className="absolute right-[10px] top-[50%] translate-y-[-50%] text-[var(--special-text)] pointer-events-none">▼</span>
                    </div>
                    <input type="number" value={updateCost} onChange={(e) => setUpdateCost(Number(e.target.value))} placeholder="Prezzo" className="w-[100%] p-[10px] text-[var(--text)] bg-[var(--bg)] border border-[#0057bb33] rounded-[10px] outline-none focus:border-[var(--special-text)] transition-all duration-[400ms]" />
                    <button onClick={updateP} className="w-[100%] p-[10px] text-[var(--special-text)] hover:text-[var(--text)] border border-[var(--special-text)] rounded-[10px] transition-all duration-[400ms] hover:bg-[var(--special-text)]">
                        ✓ Salva modifiche
                    </button>
                </div>
            )}

            <div className="w-[100%] flex flex-col gap-[10px] justify-center items-center">
                {list.map((p) => (
                    <div
                        key={p.id}
                        className={`md:w-[500px] w-[100%] flex justify-between items-center p-[15px] border rounded-[10px] transition-all duration-[400ms] ${updateId === p.id ? 'border-[var(--special-text)]' : 'border-[#0057bb33] hover:border-[var(--special-text)]'}`}
                    >
                        <div className="flex flex-col gap-[5px]">
                            <span className="text-[var(--special-text)] text-[18px] font-bold">{p.name}</span>
                            <span className="text-[var(--special-text)] opacity-50 text-[12px]">{p.description}</span>
                            <span className="text-[var(--special-text)] text-[14px]">{p.category} — {p.cost}€</span>
                        </div>
                        <div className="flex flex-col gap-[5px]">
                            <button onClick={() => selectForUpdate(p)} className="p-[8px] text-[var(--special-text)] hover:text-[var(--text)] text-[12px] border border-[#0057bb33] rounded-[10px] transition-all duration-[400ms] hover:bg-[var(--special-text)] hover:border-[var(--special-text)]">
                                Modifica
                            </button>
                            <button onClick={() => deleteP(p.id)} className="p-[8px] text-red-400 text-[12px] border border-red-400 rounded-[10px] transition-all duration-[400ms] hover:bg-red-400 hover:text-white">
                                Elimina
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}