import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import ContactNav from "../components/ContactNav"


function MainLayouts() {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactNav/>
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayouts