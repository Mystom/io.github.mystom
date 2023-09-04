function NavItem(props) {
    return (
        <li>
            <a href={props.href}>{props.text}</a>
        </li>
    );
}

function NavLinks(props) {
    return (
        <ul id="navigation" className={`nav-items ${props.id}`}>
            <NavItem href="#" text="Home" />
            <NavItem href="#" text="Guides" />
            <NavItem href="#" text="Vote" />
            <NavItem href="#" text="Store" />
        </ul>
    );
}

export default NavLinks;
