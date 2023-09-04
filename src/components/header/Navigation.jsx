import Brand from "./Brand";
import NavLinks from "./NavLinks";
import ToggleMenu from "./ToggleMenu";

function Navigation() {
    return (
        <header>
            <nav className="flex-row">
                <Brand />
                <NavLinks id="mobile-nav" />
                <NavLinks id="desktop-nav" />
                <ToggleMenu />
            </nav>
        </header>
    );
}

export default Navigation;
