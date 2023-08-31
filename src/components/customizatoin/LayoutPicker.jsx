import LayoutOption from "./LayoutOption"

export default function LayoutPicker ({setLayoutChoice}) {
  return (
    <div className='layoutContainer formContainer'>
      <h2 className='customizationTitle'>Layout</h2>
      <div className="layoutOptionContainer">
        <LayoutOption setLayoutChoice={setLayoutChoice} option={'top'} />
        <LayoutOption setLayoutChoice={setLayoutChoice} option={'left'} />
        <LayoutOption setLayoutChoice={setLayoutChoice} option={'right'} />
    </div>
    </div>
  )
}
