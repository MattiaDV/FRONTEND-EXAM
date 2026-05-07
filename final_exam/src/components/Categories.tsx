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
        <div className="w-full min-h-screen p-6 bg-white flex flex-col items-center gap-8">
            {CATEGORIES.map(cat => (
                <div key={cat} className="w-full max-w-4xl flex flex-col gap-4">
                    <h2 className="text-2xl font-medium flex items-center gap-2" style={{ color: "var(--special-text)" }}>
                        {cat}
                        <span
                            className="text-xs font-medium px-3 py-1 rounded-full"
                            style={{ backgroundColor: "#e8f0fb", color: "var(--special-text)" }}
                        >
                            {products.filter(p => p.category === cat).length} prodotti
                        </span>
                    </h2>

                    <div className="flex flex-wrap gap-4 justify-center">
                        {products
                            .filter(p => p.category === cat)
                            .map((p) => (
                                <div
                                    key={p.id}
                                    onClick={() => navigate(`/prodotti/${p.id}`)}
                                    style={{ backgroundColor: "var(--bg)" }}
                                    className="w-[200px] flex flex-col items-center text-center gap-1.5 p-5 rounded-2xl cursor-pointer border-[1.5px] border-transparent transition-all duration-200 hover:-translate-y-1 hover:border-[var(--special-text)]"
                                >
                                    <span className="text-white text-lg font-medium">{p.name}</span>
                                    <span className="text-[#8fa8cc] text-xs leading-relaxed">{p.description}</span>
                                    <span className="text-[#60a5fa] text-xl font-medium mt-1">{p.cost}€</span>
                                    <span className="text-[#8fa8cc] text-[11px] bg-[#1a2a4a] px-3 py-0.5 rounded-full mt-1">{p.category}</span>
                                </div>
                            ))
                        }
                    </div>

                    <div className="w-full h-px bg-[#dce8f7] mt-2" />
                </div>
            ))}
        </div>
    );
}