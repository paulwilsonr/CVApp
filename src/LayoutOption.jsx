export default function LayoutOption () {
  return (
    <div className='layoutContainer formContainer'>
      <h2 className='customizationTitle'>Layout</h2>
      <div className="layoutOptionContainer">
      <div className='layoutOption'>
        <div className='layoutDisplay'>
          <div className='layoutMainColor layoutTop'></div>
        </div>
        <p className='layoutOptionText'>Top</p>
      </div>

      <div className='layoutOption'>
        <div className='layoutDisplay'>
          <div className='layoutMainColor layoutLeft'></div>
        </div>
        <p className='layoutOptionText'>Left</p>
      </div>

      <div className='layoutOption'>
        <div className='layoutDisplay'>
          <div className='layoutMainColor layoutRight'></div>
        </div>
        <p className='layoutOptionText'>Right</p>
      </div>
    </div>
    </div>
  )
}
