import NavLinks from "./NavLinks";
import ToggleMenu from "./ToggleMenu";

function Navigation() {
    return (
        <header>
            <nav className="flexbox">
                <img src="./src/assets/logo.png" alt="" width="65px" />
                <NavLinks type="mobile-nav" />
                <NavLinks type="desktop-nav" />
                <ToggleMenu />
            </nav>
        </header>
    );
}

export default Navigation;
