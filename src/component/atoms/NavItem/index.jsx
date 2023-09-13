const NavItem=({name,path})=>{
    return(
        <li className="nav-item">
            <a class="nav-link" href={path}>
                {name}
                </a>
                </li>
    )
}
export default NavItem;