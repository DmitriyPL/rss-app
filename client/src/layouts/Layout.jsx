import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer/Footer";

export const Layout = () => {
    return (
        <>  
        <main>
  
            <Navbar />
            
            <Outlet />

            <Footer />
        
        </main>
            
        </>
    )
}