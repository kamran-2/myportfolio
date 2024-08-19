import cancel from '../../assets/cancel.png'
function Dailogbox(setValue) {
  return (
    <section className='model'>
      <header className='modelheader'>
        <img alt="img" onClick={()=>setValue(false)} src={cancel}/>
      </header>

    </section>
  )
}

export default Dailogbox