import { useState, useEffect } from "react"
import type { product } from "../types/prod";
import { useNavigate } from "react-router-dom";

const CATEGORIES = ["Scarpe", "Accessori", "Vestiti"];

export default function Categories() {
    const navigate = useNavigate();
    const [products, setProducts] = useState<product[]>([]);

    useEffect(() => {
        const fetchProd = async () => {
            const data = await fetch("http://localhost:3001/prodotti").then(r => r.json());
            setProducts(data);
        }
        fetchProd();
    }, []);

    return (
        <div className="w-[100%] p-[20px] bg-[var(--bg-navbar)] flex flex-col flex-wrap justify-center items-center gap-[10px]">
            {CATEGORIES.map(cat => (
                <div key={cat} className="w-full flex flex-col items-center gap-[10px]">
                    <h1 className="text-[var(--special-text)] text-[30px] font-bold">{cat}</h1>
                    <div className="w-[70%] p-[20px] bg-[var(--bg-navbar)] flex flex-wrap justify-center items-center gap-[10px]">
                        {products
                            .filter(p => p.category === cat)
                            .map((p) => (
                                <div onClick={() => navigate(`/prodotti/${p.id}`)} className="w-[300px] flex flex-col justify-center items-center h-[300px] bg-[var(--bg)] text-[var(--text)] border border-none rounded-[10px] text-center p-[20px]" key={p.id}>
                                    <span className="text-[35px]">{p.name}</span>
                                    <span className="text-[var(--special-text)]">{p.description}</span>
                                    <span>{p.cost}€</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            ))}
        </div>
    )
}