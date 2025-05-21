import Navbar from "./Navbar";

const Header = () => {

    const message = encodeURIComponent('¡Hola! Me gustaría recibir más información sobre tus servicios.');
    const whatsAppURL = `https://wa.me/527443112193?text=${message}`;
  

    return ( 
    <>
        <Navbar />

        <div className="personal-info">
            <div className="circle">
                <img src="/profile.jpg" />
            </div>
            <h1>Programador Full Stack</h1>
            <h2>Guilebaldo Vargas Solis</h2>
            <p>
                Cada proyecto es único, por eso diseño <span>software</span> adaptable a cualquier situación<span>.</span>
            </p>
            
            <div className="header-bottom">
                <div className="buttons">
                    {/* <a href="/cv.pdf">
                    <img src="/icons/cv-black.png" alt="" />
                    Descargar CV

                    </a> */}
                    <a href="#contact">
                    <img src="/icons/contact.png" alt="" />

                        Contáctame
                        </a> 
                </div>
                <div className="icons">
                    <a href="https://github.com/guilebaldodev" target="_blank">
                        <img src="/icons/github.png" alt="icono de GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/guilebaldo-vargas-788111223" target="_blank">
                        <img src="/icons/linkedin.png" alt="icono de LinkedIn" />
                    </a>
                    <a href={whatsAppURL} target="_blank">
                        <img src="/icons/whatsapp.png" alt="icono de WhatsApp" />
                    </a>
                </div>
            </div>
        </div>
    </> 
    );
}
 
export default Header;
