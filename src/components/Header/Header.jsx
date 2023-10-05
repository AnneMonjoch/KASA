import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.svg";

function Header() {
  return (
    <header>
      <a href="/" ><img src={ logo } alt="Kasa"/></a>
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </nav>
    </header>
  )
}

export default Header;