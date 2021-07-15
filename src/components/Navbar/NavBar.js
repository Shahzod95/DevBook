import {Link, NavLink} from 'react-router-dom';


const NavBar = () => {
    return ( 
        <header>
        <Link to="/" className="navbar__logo">
          Badiiyat
        </Link>
        <div className="navbar">
          <NavLink exact to="/" className="navbar-link">Home</NavLink>
          <NavLink to="/sign-up" className="navbar-link">Sign Up</NavLink>
          <NavLink to="/sign-in" className="navbar-link">Sign in</NavLink>
          <NavLink to="/author" className="navbar-link">Authors</NavLink>
        </div>
      </header>
     );
}
 
export default NavBar;

