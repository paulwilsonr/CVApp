export default function handleFontChoice (fontIndex, fontArr) {
    for(let i=0; i < fontArr.length; i++) {
        if(i === fontIndex) {
            document.getElementById(fontArr[i]).style.backgroundColor = 'var(--main-color)';
        } else {
            document.getElementById(fontArr[i]).style.backgroundColor = '#fff';
        }
    }
  }