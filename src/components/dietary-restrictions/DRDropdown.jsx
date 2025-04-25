import { useState } from "react"
import DropdownSVG from "../../assets/DropdownSVG.svg";
import "./dietary-restrictions.css";
import DRCheckbox from "./DRCheckbox";

export default function DRDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="wrapper">
      <button className="drbutton" onClick={() => setOpen(!open)}>
        <span>Dietary Restrictions</span>
        <img className={open ? "upsidedown" : ""} src={DropdownSVG} alt="Dropdown button" />
      </button>
      <div className={open ? "bg open" : "bg"}>
        <div className="cblistwrapper">
          <DRCheckbox id="dairy" name="Dairy" />
          <DRCheckbox id="egg" name="Egg" />
          <DRCheckbox id="fish" name="Fish" />
          <DRCheckbox id="gluten" name="Gluten" />
          <DRCheckbox id="peanut" name="Peanut" />
        </div>
      </div>
    </div>
  )
}