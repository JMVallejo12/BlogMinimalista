import './mainCardStyle.css'
import blur1 from '../../assets/blur-1.jpg'
import Text from '../Commons/Text/Text'

function MainCard({title_input, text_input}){
    return(
        <div className='main-card-super-container'>
            <div className='card-left'>
                <img src={blur1} alt="Imagen principal" className='img-main-card'/>
            </div>
            
            <div className='card-right'>
                <div className='main-title-container'>
                    <h2>{title_input}</h2>
                </div>
                <div className='main-text-container'>
                    {text_input}
                </div>
            </div>


        </div>
    )
}

export default MainCard