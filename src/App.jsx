import "./App.css";
import Header from "./components/Header";

function App() {
  const skills = [
    {
      name: "Next.js",
      description: "Framework de React",
      alt: "Icono de Next.js",
      img: "nextjs.png",
    },
    {
      name: "React",
      description: "Librería para interfaces de usuario",
      alt: "Icono de React",
      img: "react.png",
    },
    {
      name: "Node.js",
      description: "Entorno de ejecución de JavaScript",
      alt: "Icono de Node.jsx",
      img: "nodejs.png",
    },
    {
      name: "JavaScript",
      description: "Lenguaje de programación",
      alt: "Icono de JavaScript",
      img: "javascript.png",
    },
    {
      name: "TypeScript",
      description: "Superset tipado de JavaScript",
      alt: "Icono de TypeScript",
      img: "typescript.png",
    },

    {
      name: "GitHub",
      description: "Plataforma para control de versiones",
      alt: "Icono de GitHub",
      img: "github.png",
    },
    {
      name: "Tailwind CSS",
      description: "Framework de estilos para CSS",
      alt: "Icono de Tailwind CSS",
      img: "tailwind.svg",
    },
    {
      name: "CSS",
      description: "Lenguaje de estilos",
      alt: "Icono de CSS",
      img: "css.png",
    },
    {
      name: "HTML",
      description: "Lenguaje de marcado",
      alt: "Icono de HTML",
      img: "html.png",
    },
    {
      name: "MySQL",
      description: "Base de datos relacional",
      alt: "Icono de MySQL",
      img: "mysql.png",
    },
    {
      name: "MongoDB",
      description: "Base de datos NoSQL",
      alt: "Icono de MongoDB",
      img: "mongodb.png",
    },
    {
      name: "C#",
      description: "Lenguaje de programación",
      alt: "Icono de C#",
      img: "csharp.png",
    },
  ];

  const message = encodeURIComponent('¡Hola! Me gustaría recibir más información sobre tus servicios.');
  const whatsAppURL = `https://wa.me/527443112193?text=${message}`;


  return (
    <>
      <Header></Header>

      <div id="experience" className="section">
        <h2 className="title-section">Experiencia</h2>

        <div className="experience-list">
        <div className="experience">
            <div className="circle-title">
              <img src="/icons/suitcase.png" alt="" />
            </div>
            <div className="experience-info">
              <div className="experience-title">
                <h4>
                Desarrollador Full Stack - <span>Freelance</span>{" "}
                </h4>
              </div>
              <span >Enero 2024 - Presente</span>

                <p className="experience-description">

                Como desarrollador full stack freelance, me encargo de todo el proceso de desarrollo de software, desde el diseño y la gestión de la base de datos, hasta la implementación del frontend y backend, pasando por la integración de APIs y el despliegue en producción.
                <br /> <br></br>
Trabajo con Next.js, React y Node.js, manejando bases de datos SQL y NoSQL según las necesidades del proyecto. Utilizo Git y GitHub para el control de versiones y colaboraciones, asegurando un flujo de trabajo eficiente. Además, optimizo el rendimiento y la seguridad en cada desarrollo, implementando buenas prácticas en hosting y despliegue en plataformas como Vercel. Mi enfoque está en crear soluciones eficientes y bien estructuradas, adaptándome a los requerimientos de cada cliente y garantizando productos de alta calidad.
                </p>
            </div>
          </div>


          <div className="experience">
            <div className="circle-title">
              <img src="/icons/suitcase.png" alt="" />
            </div>
            <div className="experience-info">
              <div className="experience-title">
                <h4>
                  Desarrollador Web - <span>Ingeniotics</span>{" "}
                </h4>
              </div>
              <span >Enero 2024 - Julio 2024</span>

                <p className="experience-description">
                  Desarrollé Simponsi, un software de
                  administración y control de artículos en congresos
                  científicos. Me encargué del{" "}
                    diseño, desarrollo frontend y backend, así como de la
                    gestión de la base de datos
                  . La plataforma permite a administradores, ponentes y
                  revisores gestionar, enviar y evaluar artículos de manera
                  eficiente, optimizando el proceso de revisión y selección en
                  eventos académicos.
                </p>
            </div>
          </div>


        </div>
      </div>

      <div id="skills" className="skills-section section">
        <div className="skill-item">
          <h2 className="title-section">Habilidades</h2>

          <div className="skill-list">
            {skills.map((skill) => (
              <>
                <div className="skill">
                  <img src={`/icons/skills/${skill.img}`} alt={skill.alt} />
                  <div className="skill-info">
                    <h5>{skill.name}</h5>
                    <p>{skill.description}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>

      <div id="proyects" className="section">
        <h2 className="title-section">Proyectos</h2>
        <div className="proyect-list">
          <div className="proyect">
            <div className="proyect-img">
              <img src="/portfolio/simposi.png" alt="" />
            </div>

            <div className="proyect-info">
              <div className="proyect-info-top">
                <h4>Simposi</h4>

                <div className="proyect-spans">
                  <span>
                    <img src="/icons/skills/react.png"></img>
                    <p>React</p>
                  </span>


                  <span>
                    <img src="/icons/skills/nodejs.png"></img>
                    <p>Node.js</p>
                  </span>


                  <span className="third-tag">
                    <img src="/icons/skills/mysql.png"></img>
                    <p>MySQL</p>
                  </span>

                </div>

                <p>
                  Software de administración y control de artículos en congresos
                  científicos. Incluye roles de administrador, ponente y revisor
                  para la gestión, envío y evaluación de artículos.
                </p>
              </div>
              <div className="proyect-info-buttons">
                <a href="https://github.com/guilebaldodev/PaperApp-Backend" target="_blank">
                  <img src="/icons/github-white.png"></img>
                  GITHUB
                </a>

                <a className="bordered" href="">
                  <img src="/icons/external-link.png"></img>
                  DEMO
                </a>
              </div>
            </div>
          </div>

          <div className="proyect">
            <div className="proyect-img">
              <img src="/portfolio/lawyer_web.png" alt="" />
            </div>

            <div className="proyect-info">
              <div className="proyect-info-top">
                <h4>Justicia y Progresismo</h4>

                <div className="proyect-spans">
                  <span>
                    <img src="/icons/skills/nextjs.png"></img>
                    <p>Next.js</p>
                  </span>

                  <span>
                    <img src="/icons/skills/tailwind.svg"></img>
                    <p>Tailwind</p>
                  </span>
                </div>

                <p>
                  Landing page enfocada en mostrar servicios legales de manera
                  clara y estructurada, facilitando el acceso a información
                  relevante.
                </p>
              </div>
              <div className="proyect-info-buttons">
                <a href="https://github.com/guilebaldodev/Justicia-y-Progresismo" target="_blank">
                  <img src="/icons/github-white.png"></img>
                  GITHUB
                </a>

                <a className="bordered" href="https://www.justiciayprogresismo.com" target="_blank">
                  <img src="/icons/external-link.png"></img>
                  LINK
                </a>
              </div>
            </div>
          </div>
          <div className="proyect">
            <div className="proyect-img">
              <img src="/portfolio/TorosMx.png" alt="" />
            </div>

            <div className="proyect-info">
              <div className="proyect-info-top">
                <h4>Toros Mx</h4>

                <div className="proyect-spans">
                  <span>
                    <img src="/icons/skills/nextjs.png"></img>
                    <p>Next.js</p>
                  </span>

                  <span>
                    <img src="/icons/skills/mongodb.png"></img>
                    <p>MongoDB</p>
                  </span>

                  <span className="third-tag">
                    <img src="/icons/skills/css.png"></img>
                    <p>CSS</p>
                  </span>
                </div>

                <p>
                  Tienda en línea con catálogo de productos y un panel de
                  control para su gestión. Permite a los clientes agregar
                  productos al carrito y enviar pedidos a WhatsApp para su
                  confirmación.
                </p>
              </div>
              <div className="proyect-info-buttons">
                <a href="https://github.com/guilebaldodev/ToroShow" target="_blank">
                  <img src="/icons/github-white.png"></img>
                  GITHUB
                </a>

                <a className="bordered" href="https://github.com/guilebaldodev/ToroShow" target="_blank">
                  <img src="/icons/external-link.png"></img>
                  DEMO
                </a>
              </div>
            </div>
          </div>

          <div className="proyect">
            <div className="proyect-img">
              <img src="/portfolio/salgado.png" alt="" />
            </div>

            <div className="proyect-info">
              <div className="proyect-info-top">
                <h4>Toro Salgado</h4>

                <div className="proyect-spans">
                  <span>
                    <img src="/icons/skills/nextjs.png"></img>
                    <p>Next.js</p>
                  </span>

                  <span>
                    <img src="/icons/skills/tailwind.svg"></img>
                    <p>Tailwind</p>
                  </span>
                </div>

                <p>
                  Landing page con sistema de reservas donde los clientes pueden
                  seleccionar fecha, hora y proporcionar sus datos, facilitando
                  la confirmación a través de WhatsApp.
                </p>
              </div>
              <div className="proyect-info-buttons">
                <a href="https://github.com/guilebaldodev/ToroSalgado" target="_blank">
                  <img src="/icons/github-white.png"></img>
                  GITHUB
                </a>

                <a className="bordered" href="https://toro-salgado.vercel.app" target="_blank">
                  <img src="/icons/external-link.png"></img>
                  DEMO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="contact" className="section contact-section">
        <h2>Contáctame</h2>
        <p>
        Especializado en <span>Desarrollo Full Stack</span>. Trabajemos juntos para hacer realidad tu proyecto.
        </p>

        <div className="contact-buttons">
            <a href="https://www.linkedin.com/in/guilebaldo-vargas-788111223" target="_blank">
              <img src="/icons/linkedin-black.png" alt="" />
              <span>Linkedin</span>
            </a>
            <a href={whatsAppURL} target="_blank">
              <img src="/icons/whatsapp-black.png" alt="" />
              <span>WhatsApp</span>
            </a>
            {/* <a href="/cv.pdf">
              <img src="/icons/cv-black.png" alt="" />
              <span>Descargar cv</span>
            </a> */}
        </div>

      </div>
      
    </>
  );
}

export default App;
