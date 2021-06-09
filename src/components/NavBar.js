import { Link } from "react-router-dom";
// Styling
import { Logo, NavItem, ThemeButton } from "../styles";
import lightLogo from "../light-logo.jpg"; //lightLogo it is mean that this the variable that contain the photo
import darkLogo from "../dark-logo.png";

const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
      <Logo to="/" className="navbar-brand">
        <img src={props.currentTheme === "light" ? lightLogo : darkLogo} />
      </Logo>
      <div className="navbar-nav ml-auto">
        <NavItem
          to="/products"
          className="nav-item"
          style={{ padding: "0.25em 1em" }}
        >
          Products
        </NavItem>

        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
