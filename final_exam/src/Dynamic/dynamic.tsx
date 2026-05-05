import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import type { product } from "../types/prod";

export default function ProductPage() {
    const { id } = useParams();
    const [prod, setProd] = useState<product>();

    useEffect(() => {
        const fetchProd = async () => {
            const ris = await fetch(`http://localhost:3001/prodotti/${id}`);
            const data = await ris.json();
            setProd(data);
        }
        fetchProd();
    }, [id]);

    return (
        <div className="w-[300px] flex flex-col justify-center items-center h-[300px] bg-[var(--bg)] text-[var(--text)] border border-none rounded-[10px] text-center p-[20px]">
            <span className="text-[35px]">{prod?.name}</span>
            <span className="text-[var(--special-text)]">{prod?.description}</span>
            <span>{prod?.cost}€</span>
        </div>
    )
}