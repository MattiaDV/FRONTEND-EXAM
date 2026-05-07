export default function AboutUs() {
    return (
        <>
            <div className="w-[100%] flex flex-col justify-center items-center text-center bg-[var(--text)]">
                <h1 className="text-[50px] font-bold text-[var(--special-text)]">About us</h1>
                <p className="w-[90%] md:w-[50%] italic">
                    Il nostro store nasce con un’idea semplice: proporre capi e accessori moderni,
                    versatili e adatti a ogni stile. Dal cappotto camel alla giacca in pelle nera,
                    passando per jeans slim fit, maglioni oversize e felpe comode per tutti i giorni,
                    selezioniamo prodotti pensati per unire comfort e personalità.
                    <br /><br />

                    Oltre all’abbigliamento, offriamo anche accessori e scarpe scelti con attenzione:
                    orologi minimal, borse tote, sciarpe in cashmere, sneakers chunky, chelsea boot
                    e molto altro. Ogni prodotto è pensato per completare il tuo outfit con semplicità
                    e stile.
                    <br /><br />

                    Crediamo che la moda debba essere accessibile, pratica e capace di adattarsi
                    alla vita quotidiana senza rinunciare ai dettagli che fanno la differenza.
                </p>
            </div>
        </>
    )
}