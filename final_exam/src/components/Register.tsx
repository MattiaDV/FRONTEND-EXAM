import { ToastContainer, toast } from "react-toastify"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { logged } from "../store/logSlice"
import { addUser } from "../store/logSlice"
import type { AppDispatch } from "../store/store"
import { useNavigate } from "react-router-dom"

export default function Register() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("User");

    async function login_user(complete_name: string, email: string, password: string, role: string) {
        if (complete_name != "" && email != "" && password != "" && role != "") {
            try {
                await dispatch(addUser({
                    complete_name: complete_name,
                    email: email,
                    password: password,
                    role: role
                }))
                await dispatch(logged({
                    email: email,
                    password: password
                }));

                toast.success("Registrazione effettuata!", {
                    position: "bottom-right",
                    autoClose: 2000,
                    theme: "dark",
                    style: {
                        background: "#000824",
                        border: "1px solid #0057bb33",
                        color: "white"
                    }
                });

                navigate("/");
            } catch(err) {
                toast.error("Errore nella registrazione, riprova", {
                    position: "bottom-right",
                    autoClose: 2000,
                    theme: "dark",
                    style: {
                        background: "#000824",
                        border: "1px solid #0057bb33",
                        color: "white"
                    }
                });
            } 
        } else {
            
            toast.error("Inserire dei dati per accedere!", {
                position: "bottom-right",
                autoClose: 2000,
                theme: "dark",
                style: { background: "#000824", border: "1px solid #0057bb33", color: "white" }
            });
        }
    }  

    return (
        <> 
            <div className="w-[100%] text-[var(--text)] flex flex-col justify-center items-center p-[20px] gap-[10px]">
                <ToastContainer />
                <h1 className="text-[50px] text-[var(--special-text)] italic font-bold">Registration</h1>
                <p className="text-[20px] text-[var(--special-text)] italic font-bold">Scegli come vuoi accedere!</p>
                <input value={name} onChange={(e) => setName(e.target.value)} type="email" className="w-[200px] text-center bg-[var(--special-text)] p-[10px] text-[20px] italic border border-[var(--special-text)] rounded-[10px] transition-all duration-[400ms] outline-none focus:bg-[var(--bg)]" placeholder="Insert complete name" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-[200px] text-center bg-[var(--special-text)] p-[10px] text-[20px] italic border border-[var(--special-text)] rounded-[10px] transition-all duration-[400ms] outline-none focus:bg-[var(--bg)]" placeholder="Insert email" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-[200px] text-center bg-[var(--special-text)] p-[10px] text-[20px] italic border border-[var(--special-text)] rounded-[10px] transition-all duration-[400ms] outline-none focus:bg-[var(--bg)]"/>
                <select value={role} onChange={(e) => setRole(e.target.value)} className="w-[200px] p-[10px] text-[var(--text)] bg-[var(--special-text)] border border-[#0057bb33] rounded-[10px] outline-none focus:border-[var(--special-text)] transition-all duration-[400ms] appearance-none cursor-pointer">
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
                <button onClick={() => login_user(name, email, password, role)} className="w-[200px] text-center bg-[var(--special-text)] p-[10px] text-[20px] italic border border-[var(--special-text)] rounded-[10px] transition-all duration-[400ms] hover:bg-[var(--bg)]">Registrati</button>
            </div>
        </>
    )
}