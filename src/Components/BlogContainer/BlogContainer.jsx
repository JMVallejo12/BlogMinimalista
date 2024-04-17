import Navbar from '../Navbar/Navbar'
import './blogContainerStyle.css'
import Title from '../Commons/Title/Title'
import MainCard from '../MainCard/MainCard'
import Card from '../Card/Card'
import MainCardFlip from '../MainCardFlip/MainCardFlip'

function BlogContainer(){
    
    return(
        <div className='blog-super-container'>
            <div className='blog-container'>
                <div className='content-container'>
                    <Navbar />
                    <Title title={"MI BLOG"} />
                    <MainCard text_input={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laboriosam quidem quam dolore officia. Beatae similique corporis consequuntur quis ea numquam reprehenderit quaerat sit, minima sint maxime ut iure? Sapiente."} title_input={"Entrada de Blog principal"}/>     
                    <div className='section-1'>
                        <Card title_card={"Card 1"} text_card={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laboriosam quidem quam dolore officia. Beatae similique corporis consequuntur quis ea numquam reprehenderit quaerat sit, minima sint maxime ut iure? Sapiente"}/>
                        <Card title_card={"Card 1"} text_card={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laboriosam quidem quam dolore officia. Beatae similique corporis consequuntur quis ea numquam reprehenderit quaerat sit, minima sint maxime ut iure? Sapiente"}/>
                        <Card title_card={"Card 1"} text_card={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laboriosam quidem quam dolore officia. Beatae similique corporis consequuntur quis ea numquam reprehenderit quaerat sit, minima sint maxime ut iure? Sapiente"}/>
                        <Card title_card={"Card 1"} text_card={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laboriosam quidem quam dolore officia. Beatae similique corporis consequuntur quis ea numquam reprehenderit quaerat sit, minima sint maxime ut iure? Sapiente"}/>
                        <Card title_card={"Card 1"} text_card={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laboriosam quidem quam dolore officia. Beatae similique corporis consequuntur quis ea numquam reprehenderit quaerat sit, minima sint maxime ut iure? Sapiente"}/>
                        <Card title_card={"Card 1"} text_card={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat laboriosam quidem quam dolore officia. Beatae similique corporis consequuntur quis ea numquam reprehenderit quaerat sit, minima sint maxime ut iure? Sapiente"}/>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default BlogContainer