import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';
const Header = () => {
    const navigate = useNavigate();

    return (
        <header className='Header'>
            <div className='header__main'>
                <div>
                    <h1>Header</h1>
                    <NavLink  to={'/homepage'}>Home page</NavLink>
                </div>                    
                <div className='header__main__elem' onClick={()=>navigate(-1)}>Go Back</div>
                <div className='header__main__elem' onClick={()=>navigate(+1)}>Go Forward</div>
            </div>
        </header>
    );
}

export default Header;