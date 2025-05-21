const Navbar = () => {
    return ( 
    <>
        <div className="navbar">

        <div className="title">
            <span>{"</"}</span>
            <h2>Guile</h2>
            <span>{">"}</span>

        </div>

        <nav>
            <ul>
                <li className="e-tag">
                    <a href="#experience">Experiencia</a>
                </li>
                <li className="me-tag">
                    <a href="#skills">Habilidades</a>
                </li>
                <li>
                    <a href="#proyects">Proyectos</a>
                </li>
            </ul>
        </nav>
    
        </div>
    </> );
}
 
export default Navbar;