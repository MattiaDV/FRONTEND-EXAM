import Navbar from "../components/Navbar"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import type { RootType } from "../store/store"
import { useNavigate } from "react-router-dom"
import Admin from "../components/Admin"
import Header from "../components/Header"
import Footer from "../components/Footer"

export default function AdminPanel() {
    const navigate = useNavigate();
    const isAdmin = useSelector((state: RootType) => state.log.role == "admin");

    useEffect(() => {
        if (!isAdmin) {
            navigate("/");
        }
    }, [])

    return (
        <>
            <Navbar />
            <Header title="Admin"/>
            <div className="w-[100%] bg-[var(--text)]">
                <Admin />
            </div>
            <Footer />
        </>
    )
}