import { useDispatch } from "react-redux"
import { logged } from "../store/logSlice"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import type { AppDispatch } from "../store/store";

export default function Login() {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function login_user(email: string, password: string) {
        if (email != "" && password != "") {
            try {
                await dispatch(logged({email: email, password: password})).unwrap();

                toast.success("Login effettuato!", {
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
            } catch (err) {
                    toast.error("Email o password errati!", {
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
        <div className="w-[100%] text-[var(--text)] flex flex-col justify-center items-center p-[20px] gap-[10px]">
            <ToastContainer />
            <h1 className="text-[50px] text-[var(--special-text)] italic font-bold">Login</h1>
            <p className="text-[20px] text-[var(--special-text)] italic font-bold">Scegli come vuoi accedere!</p>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="w-[200px] text-center bg-[var(--special-text)] p-[10px] text-[20px] italic border border-[var(--special-text)] rounded-[10px] transition-all duration-[400ms] outline-none focus:bg-[var(--bg)]" placeholder="Insert email" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-[200px] text-center bg-[var(--special-text)] p-[10px] text-[20px] italic border border-[var(--special-text)] rounded-[10px] transition-all duration-[400ms] outline-none focus:bg-[var(--bg)]"/>
            <button onClick={() => login_user(email, password)} className="w-[200px] text-center bg-[var(--special-text)] p-[10px] text-[20px] italic border border-[var(--special-text)] rounded-[10px] transition-all duration-[400ms] hover:bg-[var(--bg)]">Accedi</button>
        </div>
    )
}