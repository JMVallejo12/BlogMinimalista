import './cardStyle.css'
import blur2 from '../../assets/blur-2.jpg'

function Card({title_card, text_card}){
    
    return(
        <div className='card-super-container'>
            <img src={blur2} alt="" className='img-card'/>
            <div className='card-down'>
                <h2 className='title-simple-card'>{title_card}</h2>
                <p className='text-card'>{text_card}</p>
            </div>
        </div>
    )
}   

export default Card