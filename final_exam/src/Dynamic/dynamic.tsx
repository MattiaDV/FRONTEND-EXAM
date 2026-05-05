import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { product } from "../types/prod";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../store/cartSlice";
import { ToastContainer, toast } from "react-toastify";

export default function ProductPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [prod, setProd] = useState<product>();
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProd = async () => {
            const ris = await fetch(`http://localhost:3001/prodotti/${id}`);
            const data = await ris.json();
            setProd(data);
        }
        fetchProd();
    }, [id]);

    function addToCart(prod: product) {
        dispatch(add(prod))
        toast.success("Aggiunto al carrello!", {
            position: "bottom-right",
            autoClose: 2000,
            theme: "dark",
            style: { background: "#000824", border: "1px solid #0057bb33", color: "white" }
        });
    }

    if (!prod) return (
        <div className="w-full h-screen flex justify-center items-center text-[var(--text)]">
            Caricamento...
        </div>
    );

    return (
        <div className="w-full min-h-screen bg-[#000824] flex justify-center items-center p-[40px]">
            <ToastContainer />
            <div
                className="w-full max-w-[600px] rounded-[20px] p-[40px] flex flex-col gap-[20px]"
                style={{ background: "#000824", border: "1px solid #0057bb33", boxShadow: "0 0 40px #0057bb22" }}
            >
                <span className="self-start text-[11px] uppercase tracking-widest px-[12px] py-[4px] rounded-full"
                    style={{ background: "#0057bb22", color: "#0057bb" }}>
                    {prod.category}
                </span>

                <h1 className="text-[40px] font-bold leading-tight text-white">
                    {prod.name}
                </h1>

                <hr style={{ borderColor: "#0057bb44" }} />

                <p className="text-[16px] leading-relaxed" style={{ color: "#ffffff99" }}>
                    {prod.description}
                </p>

                <span className="text-[48px] font-bold" style={{ color: "#0057bb" }}>
                    {prod.cost}€
                </span>

                <div className="flex gap-[12px] mt-[10px]">
                    <button onClick={() => addToCart(prod)}
                        className="flex-1 py-[14px] rounded-[12px] font-bold text-[16px] cursor-pointer text-white"
                        style={{ background: "#0057bb" }}>
                        Aggiungi al carrello
                    </button>
                    <button onClick={() => navigate(-1)}
                        className="px-[20px] py-[14px] rounded-[12px] font-bold text-[16px] cursor-pointer transition-opacity hover:opacity-80"
                        style={{ border: "1px solid #0057bb", color: "#0057bb", background: "transparent" }}>
                        ← Indietro
                    </button>
                </div>
            </div>
        </div>
    )
}