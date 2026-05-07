import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Products from "../components/Product"
import Categories from "../components/Categories"
import AboutUs from "../components/AboutUs"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

export default function Home() {
    return (
        <>
            <div className="">
                <Navbar />
                <Header title="Home" />
                <Products />
                <AboutUs />
                <Categories />
                <Contact />
                <Footer />
            </div>
        </>
    )
}