import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import type { RootType } from "../store/store";
import { unlog } from "../store/logSlice";
import { useDispatch } from "react-redux";

export default function Navbar() {
    const isLogged = useSelector((state: RootType) => state.log);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isAdmin = useSelector((state: RootType) => state.log.role == "admin");

    function logout() {
        dispatch(unlog());
        navigate("/");
    }
    
    return (
        <div className="w-full flex justify-center items-center gap-[20px] p-[20px] bg-[var(--bg-navbar)] text-[var(--text-color-navbar)]">
            <div onClick={() => navigate("/")} className="cursor-[pointer] p-[10px] transition-all duration-[400ms] border border-none hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">Home</div>
            <div onClick={() => navigate("/products")} className="cursor-[pointer] p-[10px] transition-all duration-[400ms] border border-none hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">Products</div>
            <div onClick={() => navigate("/categories")} className="cursor-[pointer] p-[10px] transition-all duration-[400ms] border border-none hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">Category</div>
            <div className="cursor-[pointer] p-[10px] transition-all duration-[400ms] border border-none hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">About us</div>
            <div className="cursor-[pointer] p-[10px] transition-all duration-[400ms] border border-none hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">Contact us</div>
            <div onClick={() => navigate("/carrello")} className="cursor-[pointer] p-[10px] transition-all duration-[400ms] border border-none hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">Carrello</div>
            {
                !isLogged.log ? 
                <div onClick={() => navigate("/login")} className="cursor-[pointer] p-[10px] transition-all duration-[400ms] border border-none hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">Login</div>
                :
                <div onClick={() => logout()} className="cursor-[pointer] p-[10px] transition-all duration-[400ms] border border-none hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">{isLogged.username}</div>
            }
            {
                isAdmin ?  
                <div onClick={() => navigate("/admin")} className="cursor-[pointer] p-[10px] transition-all duration-[400ms] border border-none hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[200px] text-center rounded-[10px]">Admin Panel</div>
                :
                ""
            }
        </div>
    )
}