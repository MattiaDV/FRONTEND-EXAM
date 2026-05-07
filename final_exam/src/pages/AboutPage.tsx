import AboutUs from "../components/AboutUs"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"

export default function AboutUsPage() {
    return (
        <>
            <Navbar />
            <Header title="About Us" />
            <div className="w-[100%] bg-[var(--text)] p-[20px]">
                <AboutUs />
            </div>
            <Footer />
        </>
    )
}