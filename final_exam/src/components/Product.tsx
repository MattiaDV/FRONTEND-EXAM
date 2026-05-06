import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import type { product } from "../types/prod";
import { useDispatch, useSelector } from "react-redux";
import type { RootType, AppDispatch } from "../store/store";
import { fetchProdotti } from "../store/sliceProdotti";

export default function Products() {
    const [prod, setProd] = useState<product[]>([]);
    const dispatch = useDispatch<AppDispatch>();
    const { list, loading, error } = useSelector((state: RootType) => state.prod);
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchProdotti());
    }, [dispatch]);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Errore: {error}</p>;

    return (
        <div className="w-[100%] p-[20px] bg-[var(--bg-navbar)] flex flex-col flex-wrap justify-center items-center gap-[10px]">
            <h1 className="text-[var(--special-text)] text-[30px] font-bold">Prodotti</h1>
            
            <div className="w-[70%] p-[20px] flex flex-wrap justify-center items-center gap-[10px]">
                {
                    list.map((p) => (
                        <div 
                            onClick={() => navigate(`/prodotti/${p.id}`)} 
                            className="w-[300px] flex flex-col justify-center items-center h-[300px] bg-[var(--bg)] text-[var(--text)] rounded-[10px] text-center p-[20px]" 
                            key={p.id} // 🔥 meglio di index
                        >
                            <span className="text-[35px]">{p.name}</span>
                            <span className="text-[var(--special-text)]">{p.description}</span>
                            <span>{p.cost}€</span>
                            <span>{p.category}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}