import { NavLink } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <header className='Header'>
            <div className='header_main'>
                <h1>Header</h1>           
                <NavLink to={'/'}><h3>Home page</h3></NavLink>
            </div>
            <div className='buttons'>
            <NavLink to={'/sortedthere'}><button>sorted ABC..,changed url</button></NavLink>
            <NavLink to={'/sortedback'}><button>sorted CBA...,changed url</button></NavLink>
            <br />
            <NavLink to={'/completed'}><button>completed,changed url</button></NavLink>
            <NavLink to={'/notcompleted'}><button>uncompleted,changed url</button></NavLink>
            </div>
        </header>
    );
}

export default Header;