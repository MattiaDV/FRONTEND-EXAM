type product = {
    name: string;
    cost: number;
    description: string;
    category: string;
}

export default function Products() {
    const products: product[] = [
        {name: "cipolla", cost: 100, description: "la cipolla è veramente tanto buona!", category: "Verdure"},
        {name: "patata", cost: 100, description: "la patata è veramente tanto buona!", category: "Verdure"},
        {name: "carota", cost: 100, description: "la carota è veramente tanto buona!", category: "Verdure"},
        {name: "pomodoro", cost: 120, description: "il pomodoro è fresco e perfetto per ogni piatto!", category: "Verdure"},
        {name: "zucchina", cost: 90, description: "la zucchina è leggera e super versatile in cucina!", category: "Verdure"},

        {name: "mela", cost: 110, description: "la mela è croccante e dolce al punto giusto!", category: "Frutta"},
        {name: "banana", cost: 95, description: "la banana è energetica e perfetta per uno snack veloce!", category: "Frutta"},
        {name: "arancia", cost: 105, description: "l’arancia è ricca di vitamina C e super fresca!", category: "Frutta"},
        {name: "fragola", cost: 130, description: "la fragola è dolce e irresistibile!", category: "Frutta"},
        {name: "kiwi", cost: 115, description: "il kiwi è fresco e leggermente acidulo!", category: "Frutta"},

        {name: "acqua", cost: 50, description: "l’acqua è essenziale per la vita!", category: "Bevande"},
        {name: "succo d'arancia", cost: 140, description: "succo fresco e pieno di vitamine!", category: "Bevande"},
        {name: "cola", cost: 150, description: "bevanda frizzante e gustosa!", category: "Bevande"},
        {name: "tè freddo", cost: 135, description: "perfetto per rinfrescarsi!", category: "Bevande"}
    ]
    return (
        <div className="w-[100%] p-[20px] bg-[var(--bg-navbar)] flex flex-col flex-wrap justify-center items-center gap-[10px]">
            <h1 className="text-[var(--special-text)] text-[30px] font-bold">Prodotti</h1>
            <div className="w-[70%] p-[20px] bg-[var(--bg-navbar)] flex flex-wrap justify-center items-center gap-[10px]">
                {
                    products.map((p, i) => (
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