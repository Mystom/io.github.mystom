function NavItem(props) {
    return (
        <li className="hover-underline">
            <a href={props.href}>
                <i style={{marginRight: '7px'}}className={`fa-${props.brand ? 'brands' : 'solid'} fa-${props.icon}`}></i>
                {props.text}
            </a>
        </li>
    );
}

function NavLinks(props) {
    return (
        <ul id="navigation" className={`nav-items ${props.type}`}>
            <NavItem href="#" text="Home" icon="house" />
            <NavItem href="#" text="Guide" icon="circle-info" />
            <NavItem href="#" text="Discord" icon="discord" brand />
            <NavItem href="#" text="Store" icon="basket-shopping" />
        </ul>
    );
}

export default NavLinks;
