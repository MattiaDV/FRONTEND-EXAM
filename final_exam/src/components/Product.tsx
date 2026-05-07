import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootType, AppDispatch } from "../store/store";
import { fetchProdotti } from "../store/sliceProdotti";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";
import type { product } from "../types/prod";

export default function Products() {
    const dispatch = useDispatch<AppDispatch>();
    const { list, loading, error } = useSelector((state: RootType) => state.prod);
    const navigate = useNavigate();
    const [v1, setV1] = useState(100);
    const [v2, setV2] = useState(700);
    const [pname, setPname] = useState("");
    const [pcat, setPcat] = useState("");
    const [fil, setFil] = useState<product[]>([]);

    function setV(p: number, s: number) {
        setV1(p);
        setV2(s);
    }

    function search(list: product[], name: string, cat: string, pr: number, s: number) {
        setFil(list.filter((p) => {
            const matchName = name === "" || p.name.includes(name);
            const matchCat = cat === "" || p.category === cat;
            const matchPrice = p.cost >= pr && p.cost <= s;

            return matchName && matchCat && matchPrice;
        }));
    }

    useEffect(() => {
        dispatch(fetchProdotti());
    }, [dispatch]);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Errore: {error}</p>;

    return (
        <div className="w-full min-h-screen p-6 bg-white flex flex-col items-center gap-6 text-center">
            <h1 style={{ color: "var(--special-text)" }} className="text-3xl font-medium">Prodotti</h1>

            {/* Filter Bar */}
            <div className="w-full max-w-4xl flex flex-wrap gap-4 items-end justify-center p-5 rounded-2xl border border-[#dce8f7] bg-[#f4f7fc]">
                
                {/* Categoria */}
                <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--special-text)" }}>Categoria</span>
                    <select
                        value={pcat}
                        onChange={(e) => setPcat(e.target.value)}
                        className="px-3.5 py-2.5 rounded-xl bg-white text-[#000824] text-sm outline-none min-w-[160px] border-[1.5px] border-[#b8d0f0] focus:border-[var(--special-text)] transition-colors"
                    >
                        <option value="">Tutte le categorie</option>
                        <option>Vestiti</option>
                        <option>Scarpe</option>
                        <option>Accessori</option>
                    </select>
                </div>

                {/* Nome */}
                <div className="flex flex-col gap-1.5">
                    <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--special-text)" }}>Per nome</span>
                    <input
                        type="text"
                        placeholder="Ricerca per nome"
                        value={pname}
                        onChange={(e) => setPname(e.target.value)}
                        className="px-3.5 py-2.5 rounded-xl bg-white text-[#000824] text-sm outline-none min-w-[160px] border-[1.5px] border-[#b8d0f0] focus:border-[var(--special-text)] transition-colors"
                    />
                </div>

                {/* Prezzo */}
                <div className="flex flex-col gap-2">
                    <span className="text-xs font-medium uppercase tracking-wider" style={{ color: "var(--special-text)" }}>Per prezzo</span>
                    <div className="w-[200px]">
                        <Slider
                            range
                            min={0}
                            max={1000}
                            defaultValue={[v1, v2]}
                            onChange={(value: number | number[]) => {
                                if (Array.isArray(value)) setV(value[0], value[1]);
                            }}
                            styles={{
                                track: { backgroundColor: "var(--special-text)" },
                                handle: { borderColor: "var(--special-text)", backgroundColor: "var(--special-text)" },
                                rail: { backgroundColor: "#b8d0f0" },
                            }}
                        />
                    </div>
                    <span className="text-sm font-medium text-[#555]">{v1}€ – {v2}€</span>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 pb-0.5">
                    <button
                        onClick={() => search(list, pname, pcat, v1, v2)}
                        style={{ backgroundColor: "var(--special-text)", borderColor: "var(--special-text)" }}
                        className="px-5 py-2.5 rounded-xl text-white text-sm font-medium border-[1.5px] transition-all duration-300 hover:opacity-80"
                    >
                        Ricerca
                    </button>
                    <button
                        onClick={() => setFil([])}
                        style={{ color: "var(--special-text)", borderColor: "var(--special-text)" }}
                        className="px-5 py-2.5 rounded-xl bg-white text-sm font-medium border-[1.5px] transition-all duration-300 hover:bg-[#f0f5ff]"
                    >
                        Clear
                    </button>
                </div>
            </div>

            {/* Filtered Results */}
            {fil.length > 0 && (
                <div className="w-full max-w-4xl flex flex-col gap-4">
                    <h2 className="text-2xl font-medium flex items-center gap-2" style={{ color: "var(--special-text)" }}>
                        Prodotti filtrati
                        <span
                            className="text-xs font-medium px-3 py-1 rounded-full"
                            style={{ backgroundColor: "#e8f0fb", color: "var(--special-text)" }}
                        >
                            {fil.length} risultati
                        </span>
                    </h2>
                    <div className="flex flex-wrap gap-4 justify-center">
                        {fil.map((p) => (
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
                        ))}
                    </div>
                </div>
            )}

            {/* All Products */}
            <div className="w-full max-w-4xl flex flex-col gap-4">
                <h2 className="text-2xl font-medium" style={{ color: "var(--special-text)" }}>Tutti i prodotti</h2>
                <div className="flex flex-wrap gap-4 justify-center">
                    {list.map((p) => (
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
                    ))}
                </div>
            </div>
        </div>
    );
}