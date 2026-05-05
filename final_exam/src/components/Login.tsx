import { useDispatch } from "react-redux"
import { logged } from "../store/logSlice"
import { useNavigate } from "react-router-dom";

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function login_user(log: boolean = true, role: string = "user") {
        dispatch(logged({log, role}));
        navigate("/");
    }

    function login_admin(log: boolean = true, role: string = "admin") {
        dispatch(logged({log, role}));
        navigate("/");
    }

    return (
        <div className="w-[100%] text-[var(--text)] flex flex-col justify-center items-center p-[20px] gap-[10px]">
            <h1 className="text-[50px] text-[var(--special-text)] italic font-bold">Login</h1>
            <p className="text-[20px] text-[var(--text)] italic font-bold">Scegli come vuoi accedere!</p>
            <button onClick={() =>login_user()} className="w-[200px] text-center bg-[var(--special-text)] p-[10px] text-[20px] italic border border-[var(--special-text)] rounded-[10px] transition-all duration-[400ms] hover:bg-[var(--bg)]">Accedi come utente</button>
            <button onClick={() =>login_admin()} className="w-[200px] text-center bg-[var(--special-text)] p-[10px] text-[20px] italic border border-[var(--special-text)] rounded-[10px] transition-all duration-[400ms] hover:bg-[var(--bg)]">Accedi come admin</button>
        </div>
    )
}