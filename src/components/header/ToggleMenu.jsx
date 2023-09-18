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
                    const body = document.body.classList;

                    navItem.transform = `translateX(${isToggled ? 0 : 100}%)`;
                    if (isToggled) body.add('noscroll');
                    else body.remove('noscroll');
                }}
            />
        </div>
    );
}

export default ToggleMenu;
