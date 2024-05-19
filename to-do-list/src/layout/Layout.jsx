import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
    return (
        <>
            <Navbar />
            <div className="bg-emerald-100 min-h-[92vh]">
                <Outlet />
            </div>
        </>
    )
}

export default Layout;