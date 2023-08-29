import LayoutOption from "./LayoutOption"
import ColorOption from "./ColorOption"
import FontsOption from "./FontsOption"

export default function Customization ({setMainColor, mainColor, setFontChoice}) {
    return (
        <div>
            <LayoutOption />
            <ColorOption setMainColor={setMainColor} mainColor={mainColor} />
            <FontsOption setFontChoice={setFontChoice} />
        </div>
    )
}