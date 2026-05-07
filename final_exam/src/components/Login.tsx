import { useDispatch } from "react-redux"
import { logged } from "../store/logSlice"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function login_user(username: string, password: string, log: boolean = true, role: string = "user") {
        if (username != "" && password != "") {
            dispatch(logged({username, password, log, role}));
            navigate("/");
        } else {
            toast.error("Inserire dei dati per accedere!", {
                position: "bottom-right",
                autoClose: 2000,
                theme: "dark",
                style: { background: "#000824", border: "1px solid #0057bb33", color: "white" }
            });
        }
    }

    function login_admin(username: string, password: string, log: boolean = true, role: string = "admin") {
        if (username != "" && password != "") {
            dispatch(logged({username, password, log, role}));
            navigate("/");
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
            <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="w-[200px] text-center bg-[var(--special-text)] p-[10px] text-[20px] italic border border-[var(--special-text)] rounded-[10px] transition-all duration-[400ms] outline-none focus:bg-[var(--bg)]" placeholder="Insert username" />
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-[200px] text-center bg-[var(--special-text)] p-[10px] text-[20px] italic border border-[var(--special-text)] rounded-[10px] transition-all duration-[400ms] outline-none focus:bg-[var(--bg)]"/>
            <button onClick={() => login_user(username, password)} className="w-[200px] text-center bg-[var(--special-text)] p-[10px] text-[20px] italic border border-[var(--special-text)] rounded-[10px] transition-all duration-[400ms] hover:bg-[var(--bg)]">Accedi come utente</button>
            <button onClick={() => login_admin(username, password)} className="w-[200px] text-center bg-[var(--special-text)] p-[10px] text-[20px] italic border border-[var(--special-text)] rounded-[10px] transition-all duration-[400ms] hover:bg-[var(--bg)]">Accedi come admin</button>
        </div>
    )
}