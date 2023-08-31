export default function LayoutOption({setLayoutChoice, option}) {
    let capitalOption = option.charAt(0).toUpperCase() + option.slice(1);
    return(
        <div className='layoutOption' onClick={() => setLayoutChoice(option)} >
        <div className='layoutDisplay'>
          <div className={'layoutMainColor layout' + capitalOption}></div>
        </div>
        <p className='layoutOptionText'>{capitalOption}</p>
      </div> 
    )
}