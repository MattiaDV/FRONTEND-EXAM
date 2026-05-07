export default function Contact() {
    return (
        <>
            <div className="w-[100%] flex flex-col justify-center items-center text-center bg-[var(--text)]">
                <h2 className="text-[50px] font-bold">Contattaci</h2>

                <p className="w-[90%] md:w-[50%] italic">
                    Hai bisogno di informazioni su un prodotto, una spedizione o il tuo ordine?
                    Il nostro team è sempre disponibile per aiutarti.
                    <br /><br />

                    Per qualsiasi domanda puoi contattarci tramite email oppure attraverso
                    i nostri canali social. Cerchiamo di rispondere a tutte le richieste
                    nel minor tempo possibile.
                    <br /><br />

                    Che tu abbia bisogno di supporto, consigli sui prodotti o semplicemente
                    voglia saperne di più sul nostro store, saremo felici di aiutarti.
                </p>

                <div className="border p-[10px] border-[var(--special-text)] text-[var(--special-text)] flex flex-col justify-center items-center gap-[10px] rounded-[10px] mt-[20px] mb-[50px] font-bold">
                    <span>Email: support@yourstore.com</span>
                    <span>Telefono: +39 123 456 7890</span>
                    <span>Instagram: @yourstore</span>
                </div>
            </div>
        </>
    )
}