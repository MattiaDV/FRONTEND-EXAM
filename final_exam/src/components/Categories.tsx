import { useState, useEffect } from "react"
import type { product } from "../types/prod";

export default function Categories() {
    const [products, setProducts] = useState<product[]>([]);

    useEffect(() => {
        const fetchProd = async () => {
            const ris = await fetch("http://localhost:3001/prodotti");
            const data = await ris.json();
            setProducts(data);
        }
        fetchProd();
    })

    return (
        <div className="w-[100%] p-[20px] bg-[var(--bg-navbar)] flex flex-col flex-wrap justify-center items-center gap-[10px]">
            <h1 className="text-[var(--special-text)] text-[30px] font-bold">Scarpe</h1>
            <div className="w-[70%] p-[20px] bg-[var(--bg-navbar)] flex flex-wrap justify-center items-center gap-[10px]">
                {
                    products
                    .filter(d => d.category == "Scarpe")
                    .map((p, i) => (
                        <div className="w-[300px] flex flex-col justify-center items-center h-[300px] bg-[var(--bg)] text-[var(--text)] border border-none rounded-[10px] text-center p-[20px]" key={i}>
                            <span className="text-[35px]">{p.name}</span>
                            <span className="text-[var(--special-text)]">{p.description}</span>
                            <span className="">{p.cost}€</span>
                        </div>
                    ))
                }
            </div>
            <h1 className="text-[var(--special-text)] text-[30px] font-bold">Accessori</h1>
            <div className="w-[70%] p-[20px] bg-[var(--bg-navbar)] flex flex-wrap justify-center items-center gap-[10px]">
                {
                    products
                    .filter(d => d.category == "Accessori")
                    .map((p, i) => (
                        <div className="w-[300px] flex flex-col justify-center items-center h-[300px] bg-[var(--bg)] text-[var(--text)] border border-none rounded-[10px] text-center p-[20px]" key={i}>
                            <span className="text-[35px]">{p.name}</span>
                            <span className="text-[var(--special-text)]">{p.description}</span>
                            <span className="">{p.cost}€</span>
                        </div>
                    ))
                }
            </div>
            <h1 className="text-[var(--special-text)] text-[30px] font-bold">Vestiti</h1>
            <div className="w-[70%] p-[20px] bg-[var(--bg-navbar)] flex flex-wrap justify-center items-center gap-[10px]">
                {
                    products
                    .filter(d => d.category == "Vestiti")
                    .map((p, i) => (
                        <div className="w-[300px] flex flex-col justify-center items-center h-[300px] bg-[var(--bg)] text-[var(--text)] border border-none rounded-[10px] text-center p-[20px]" key={i}>
                            <span className="text-[35px]">{p.name}</span>
                            <span className="text-[var(--special-text)]">{p.description}</span>
                            <span className="">{p.cost}€</span>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}