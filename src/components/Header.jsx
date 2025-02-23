import Navbar from "./Navbar";

const Header = () => {
    return ( 
    <>
        <Navbar></Navbar>

        <div className="personal-info">
            <div className="circle">
                <img src="/profile.jpg"></img>
            </div>
            <h1>Programador Full Stack</h1>
            <h2>Guilebaldo Vargas Solis </h2>
            <p>
            Cada proyecto es único, por eso diseño <span>software</span> adaptable a cualquier situación<span>.</span>
            </p>
            
            <div className="header-bottom">
                <div className="buttons">
                    <button>Descargar cv</button>
                    <button>Contactame</button>
                </div>
                <div className="icons">
                    <a href="">
                    <img src="/icons/github.png" alt="icono de github" />
                    </a>
                    <a href="">
                    <img src="/icons/linkedin.png" alt="icono de github" />
                    </a>
                    <a href="">
                    <img src="/icons/whatsapp.png" alt="icono de github" />
                    </a>
                </div>

            </div>

        </div>


    

    </> );
}
 
export default Header;