import Products from "../components/Product"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function ProductsPage() {
    return (
        <>
            <Navbar />
            <Header title="Products" />
            <Products />
            <Footer />
        </>
    )
}