import Squeeze from "hamburger-react";

function ToggleMenu() {
    return (
        <div className="mobile-toggle-menu">
            <Squeeze
                rounded
                easing="ease-in"
                size={20}
                color="white"
                onToggle={(isToggled) => {
                    const navItem = document.getElementById("navigation").style;
                    navItem.transform = `translateX(${isToggled ? 0 : 100}%)`;
                }}
            />
        </div>
    );
}

export default ToggleMenu;
