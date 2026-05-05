import { useDispatch, useSelector } from "react-redux";
import type { RootType } from "../store/store";
import { remove, clear } from "../store/cartSlice";
import Navbar from "../components/Navbar";

export default function Cart() {
    const dispatch = useDispatch();
    const items = useSelector((state: RootType) => state.cart.list);
    const total = items.reduce((acc, i) => acc + i.cost, 0);

    return (
        <>
            <Navbar />
            <div className="w-full min-h-screen bg-[#000824] flex flex-col items-center p-[40px] gap-[16px]">
                <h1 className="text-[30px] font-bold text-white mb-[10px]">Carrello</h1>

                {items.length === 0 ? (
                    <span className="text-white text-[20px] mt-[40px]">Il carrello è vuoto</span>
                ) : (
                    <>
                        {items.map(item => (
                            <div key={item.id} className="w-full max-w-[600px] rounded-[16px] p-[20px] flex justify-between items-center"
                                style={{ border: "1px solid #0057bb33", background: "#000824" }}>
                                <div className="flex flex-col gap-[4px]">
                                    <span className="text-white font-bold text-[18px]">{item.name}</span>
                                    <span style={{ color: "#ffffff99" }} className="text-[13px]">{item.category}</span>
                                    <span style={{ color: "#0057bb" }} className="text-[16px] font-bold">{item.cost}€</span>
                                </div>
                                <button
                                    onClick={() => dispatch(remove(item.id))}
                                    className="px-[16px] py-[8px] rounded-[10px] font-bold text-[13px] cursor-pointer"
                                    style={{ border: "1px solid #ff444466", color: "#ff4444", background: "transparent" }}>
                                    Rimuovi
                                </button>
                            </div>
                        ))}

                        <div className="w-full max-w-[600px] flex justify-between items-center mt-[10px]">
                            <span className="text-white text-[20px]">Totale: <strong style={{ color: "#0057bb" }}>{total}€</strong></span>
                            <button
                                onClick={() => dispatch(clear())}
                                className="px-[20px] py-[10px] rounded-[12px] font-bold cursor-pointer text-white"
                                style={{ background: "#0057bb" }}>
                                Svuota carrello
                            </button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}