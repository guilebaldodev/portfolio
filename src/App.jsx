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

  return (
    <>
      <Header></Header>

      <div className="skills-section section">
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

      <div className="section">
          <h2 className="title-section">Proyectos</h2>
            <div className="proyect-list">

            <div className="proyect">
              <div className="proyect-img">
                <img src="/portfolio/" alt="" />
              </div>

              <div className="proyect-info">
                <h4>Justicia y Progresimso</h4>
                <p>Landing Page</p>
              </div>

            </div>

            </div>
        </div>
    </>
  );
}

export default App;
