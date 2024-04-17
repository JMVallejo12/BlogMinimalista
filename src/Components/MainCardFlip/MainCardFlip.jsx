import './mainCardFlipStyle.css'
import blur1 from '../../assets/blur-1.jpg'


function MainCardFlip({title_input, text_input}){

    return(
        <div className='main-card-super-container'>
            <div className='card-left'>
            <div className='main-title-container'>
                    <h2>{title_input}</h2>
                </div>
                <div className='main-text-container'>
                    {text_input}
                </div>
            </div>
            
            <div className='card-right'>
                <img src={blur1} alt="Imagen principal" className='img-main-card'/>
            </div>


        </div>
    )
}

export default MainCardFlip