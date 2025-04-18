import { Outlet } from "react-router";
import NavBar from "../components/global/navbar/NavBar";
import Footer from "../components/global/footer/Footer";

export default function AppLayout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  )
}