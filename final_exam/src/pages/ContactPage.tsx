import Contact from "../components/Contact";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <Header title="Contacts" />
            <div className="w-[100%] bg-[var(--text)]">
                <Contact />
            </div>
            <Footer />
        </>
    )
}