import { useNavigate } from "react-router-dom"

export default function PageNotFound() {
    const navigate = useNavigate();

    return (
        <div className="w-[100%] h-[100vh] flex flex-col justify-center items-center text-center">
            <h1 className="text-[var(--special-text)] text-[50px] font-bold italic">ERROR 404</h1>
            <button className="text-[var(--special-text)] text-[20px] font-bold italic border border-[var(--special-text)] rounded-[10px] p-[10px] w-[200px] transition-all duration-[400ms] hover:bg-[var(--special-text)] hover:text-[var(--text)]" onClick={() => navigate("/")}>Return home</button>
        </div>
    )
}