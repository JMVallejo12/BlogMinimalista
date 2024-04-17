import './navbarStyle.css'
import Logo from '../Logo/Logo'

function Navbar(){


    return(
        <div className='navbar-super-container'>
            <div className='nav-left'>
                <Logo />
            </div>
            <div className='nav-right'>
                <ul className='nav-list'>
                    <a href="" className='li-item'><li>SECCIÓN 1</li></a>
                    <a href="" className='li-item'><li>SECCIÓN 2</li></a>
                    <a href="" className='li-item'><li>SECCIÓN 3</li></a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar