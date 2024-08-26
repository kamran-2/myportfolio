import cancel from '../../assets/cancel.png'
import forward from '../../assets/forward.png'
import backward from '../../assets/backward.png'
import mywork from './mywork'
function Dailogbox(prop) {
  const handleChange = () => {
    prop.setvalue(false);
  }
  return (
    <section className='model' style={prop.Style}>
      
      <header className='modelheader'>
        <img alt="img" onClick={handleChange} src={cancel} />
      </header>
      <div className='courausel'>
        <span  className='arrow'>
          <img src={backward} alt="" />
        </span>

        {
          
          mywork.filter((e) => e.id === prop.myindex + 1).map((item, index) => <img className='courauselimg' src={item.headimg} alt="" />
)
        }

        <span className='arrow'>
          <img src={forward} alt="" />
        </span>
      </div>
    </section>
  )
}

export default Dailogbox