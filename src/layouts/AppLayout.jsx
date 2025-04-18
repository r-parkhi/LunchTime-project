import { Outlet } from "react-router";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function AppLayout() {
  return (
    <>
      <NavBar/>
      <Outlet />
      <Footer/>
    </>
  )
}