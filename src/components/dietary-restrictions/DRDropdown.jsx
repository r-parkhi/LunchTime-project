import { useState } from "react"
import DropdownSVG from "../../assets/DropdownSVG.svg";
import "./dietary-restrictions.css";
import DRCheckbox from "./DRCheckbox";

export default function DRDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="wrapper">
      <button onClick={() => setOpen(!open)}>
        <span>Dieary Restrictions</span>
        <img className={open ? "upsidedown" : ""} src={DropdownSVG} alt="Dropdown button" />
      </button>
      <div className={open ? "bg open" : "bg"}>
        <DRCheckbox />
      </div>
    </div>
  )
}