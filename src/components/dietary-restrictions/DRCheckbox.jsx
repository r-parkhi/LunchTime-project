export default function DRCheckbox({ id, name }) {
  return (
    <div id={id} className="cbwrapper">
      <input className="checkbox" type="checkbox" />
      <span className="checkboxLabel">{name}</span>
    </div>
  )
}