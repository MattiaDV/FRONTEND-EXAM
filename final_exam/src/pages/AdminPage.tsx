import Navbar from "../components/Navbar"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import type { RootType } from "../store/store"
import { useNavigate } from "react-router-dom"
import Admin from "../components/Admin"

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
            <Admin />
        </>
    )
}