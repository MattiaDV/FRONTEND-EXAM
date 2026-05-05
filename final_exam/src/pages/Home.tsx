import Navbar from "../components/Navbar"
import Header from "../components/Header"
import Products from "../components/Product"
import Categories from "../components/Categories"

export default function Home() {
    return (
        <>
            <div className="">
                <Navbar />
                <Header />
                <Products />
                <Categories />
            </div>
        </>
    )
}