import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import type { product } from "../types/prod";

export default function Products() {
    const [prod, setProd] = useState<product[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProd = async () => {
            const ris = await fetch("http://localhost:3001/prodotti");
            const data = await ris.json();
            setProd(data);
        }

        fetchProd();
    }, []);
    
    return (
        <div className="w-[100%] p-[20px] bg-[var(--bg-navbar)] flex flex-col flex-wrap justify-center items-center gap-[10px]">
            <h1 className="text-[var(--special-text)] text-[30px] font-bold">Prodotti</h1>
            <div className="w-[70%] p-[20px] bg-[var(--bg-navbar)] flex flex-wrap justify-center items-center gap-[10px]">
                {
                    prod.map((p, i) => (
                        <div onClick={() => navigate(`/prodotti/${p.id}`)} className="w-[300px] flex flex-col justify-center items-center h-[300px] bg-[var(--bg)] text-[var(--text)] border border-none rounded-[10px] text-center p-[20px]" key={i}>
                            <span className="text-[35px]">{p.name}</span>
                            <span className="text-[var(--special-text)]">{p.description}</span>
                            <span className="">{p.cost}€</span>
                            <span className="">{p.category}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}