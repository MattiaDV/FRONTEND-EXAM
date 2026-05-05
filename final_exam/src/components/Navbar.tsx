import { useNavigate } from "react-router-dom"

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <div className="w-full flex justify-center items-center gap-[20px] p-[20px] bg-[var(--bg-navbar)] text-[var(--text-color-navbar)]">
            <div onClick={() => navigate("/")} className="cursor-[pointer] p-[10px] transition-all duration-[400ms] border border-none hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">Home</div>
            <div onClick={() => navigate("/products")} className="cursor-[pointer] p-[10px] transition-all duration-[400ms] border border-none hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">Products</div>
            <div onClick={() => navigate("/categories")} className="cursor-[pointer] p-[10px] transition-all duration-[400ms] border border-none hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">Category</div>
            <div className="cursor-[pointer] p-[10px] transition-all duration-[400ms] border border-none hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">About us</div>
            <div className="cursor-[pointer] p-[10px] transition-all duration-[400ms] border border-none hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">Contact us</div>
            <div onClick={() => navigate("/carrello")} className="cursor-[pointer] p-[10px] transition-all duration-[400ms] border border-none hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">Carrello</div>
        </div>
    )
}