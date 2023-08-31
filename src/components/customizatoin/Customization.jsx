import LayoutPicker from "./LayoutPicker"
import ColorOption from "./ColorOption"
import FontsOption from "./FontsOption"

export default function Customization ({setMainColor, mainColor, setFontChoice, setLayoutChoice, setTextColor, textColor}) {
    return (
        <div>
            <LayoutPicker setLayoutChoice={setLayoutChoice} />
            <ColorOption setMainColor={setMainColor} mainColor={mainColor} setTextColor={setTextColor} textColor={textColor} />
            <FontsOption setFontChoice={setFontChoice} />
        </div>
    )
}