import {Link, NavLink} from 'react-router-dom';


const NavBar = () => {
    return ( 
        <header>
        <Link to="/" className="navbar__logo">
          BADIIYAT
        </Link>
        <div className="navbar">
          <NavLink exact to="/" className="navbar-link">Home</NavLink>
          <NavLink to="/sign-up" className="navbar-link">Sign Up</NavLink>
          <NavLink to="/sign-in" className="navbar-link">Sign in</NavLink>
          <NavLink to="/add-author" className="navbar-link">Add Author</NavLink>
          <NavLink to="/authors" className="navbar-link">Authors</NavLink>
          <NavLink to="/add-book" className="navbar-link">Add Book</NavLink>
        </div>
      </header>
     );
}
 
export default NavBar;

