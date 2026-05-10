import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Register from "../components/Register";

export default function RegisterPage() {
    return (
        <>
            <Navbar />
            <Header title="Registration" />
            <div className="w-[100%] bg-[var(--text)]">
                <Register />
            </div>
            <Footer />
        </>
    )
}