export default function Header() {
    return (
        <div className="relative top-[0px] left-[0px] w-[100%] h-[80vh] flex justify-space items-center text-[var(--text)] flex-wrap z-[-999]">
            <div className="w-[50%] flex flex-col justify-center items-center">
                <span className="text-[var(--special-text)] text-[50px] italic">ShoppyStore</span>
                <span className="text-[var(--text)] text-[17px]">Welcome to the shoppy store, everything you need for dressing <span className="text-[var(--special-text)] italic">COOL</span></span>
            </div>
            <div className="w-[50%] flex flex-col justify-center items-center">
                <div className="border border-[var(--special-text)] w-[100px] h-[100px] rounded-[50%] bg-[var(--special-text)] flex justify-center items-center text-[60px] pb-[10px] italic hover:bg-[var(--bg)] transition-all duration-[400ms]">S</div>
            </div>
        </div>
    )
}