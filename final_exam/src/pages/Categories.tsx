import Categories from "../components/Categories"
import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function CategoriesPage() {
    return (
        <>
            <Navbar />
            <Header title="Categories" />
            <Categories />
            <Footer />
        </>
    )
}