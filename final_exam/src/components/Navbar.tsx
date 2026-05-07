import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux";
import type { RootType } from "../store/store";
import { unlog } from "../store/logSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { clear } from "../store/cartSlice";

export default function Navbar() {
    const isLogged = useSelector((state: RootType) => state.log);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [mobileOpen, setMobileOpen] = useState(false);

    const isAdmin = useSelector((state: RootType) => state.log.role == "admin");

    function logout() {
        dispatch(unlog());
        dispatch(clear());
        navigate("/");
    }

    return (
        <>
            <button
                onClick={() => setMobileOpen(true)}
                className={`md:hidden fixed top-[20px] right-[20px] z-[999] text-[var(--special-text)] text-[30px] ${mobileOpen ? "hidden" : "flex"}`}
            >=</button>

            {/* Navbar */}
            <div className={`fixed md:relative w-[100vw] md:w-full z-[999] h-[100vh] md:h-auto flex-col md:flex-row justify-center items-center gap-[20px] p-[20px] bg-[var(--bg-navbar)] text-[var(--text-color-navbar)]
                ${mobileOpen ? "flex" : "hidden"} md:flex`}>

                {/* X - solo mobile */}
                <button
                    onClick={() => setMobileOpen(false)}
                    className="md:hidden absolute top-[20px] right-[20px] text-[var(--special-text)] text-[30px]"
                >X</button>

                <div onClick={() => { navigate("/"); setMobileOpen(false); }} className="cursor-pointer p-[10px] transition-all duration-[400ms] hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">Home</div>
                <div onClick={() => { navigate("/products"); setMobileOpen(false); }} className="cursor-pointer p-[10px] transition-all duration-[400ms] hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">Products</div>
                <div onClick={() => { navigate("/categories"); setMobileOpen(false); }} className="cursor-pointer p-[10px] transition-all duration-[400ms] hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">Category</div>
                <div onClick={() => { navigate("/about"); setMobileOpen(false); }} className="cursor-pointer p-[10px] transition-all duration-[400ms] hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">About us</div>
                <div onClick={() => { navigate("/contact"); setMobileOpen(false); }} className="cursor-pointer p-[10px] transition-all duration-[400ms] hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">Contact us</div>
                <div onClick={() => { navigate("/carrello"); setMobileOpen(false); }} className="cursor-pointer p-[10px] transition-all duration-[400ms] hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">Carrello</div>
                {!isLogged.log
                    ? <div onClick={() => { navigate("/login"); setMobileOpen(false); }} className="cursor-pointer p-[10px] transition-all duration-[400ms] hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">Login</div>
                    : <div onClick={() => logout()} className="cursor-pointer p-[10px] transition-all duration-[400ms] hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] w-[100px] text-center rounded-[10px]">Logout</div>
                }
                {isAdmin &&
                    <div onClick={() => { navigate("/admin"); setMobileOpen(false); }} className="cursor-pointer p-[10px] transition-all duration-[400ms] hover:bg-[var(--text-color-navbar)] hover:text-[var(--bg-navbar)] text-center rounded-[10px]">Admin Panel</div>
                }
            </div>
        </>
    )
}