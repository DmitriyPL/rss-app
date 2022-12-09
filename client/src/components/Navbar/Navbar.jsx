import "./navbar.scss"
import { NavLink } from "react-router-dom";

const setActive = ( { isActive } ) => isActive ? "nav__menu-item-active-link" : "nav__menu-item-link";

export const Navbar = () => {

    return (
        <>
        <nav className="nav">
            <ul className="nav__menu">
                <li className="nav__menu-item">
                    <NavLink to='/' className={ setActive }>Home</NavLink>
                </li>
                <li className="nav__menu-item">
                    <NavLink to='/about' className={ setActive }>About</NavLink>
                </li>
            </ul>
        </nav>                
        </>
    )
}