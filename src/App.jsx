import "./App.css";
import profile from "./assets/profile.jpg";

export default function App() {
  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-inner">
          <h1 className="logo">Vanshika Kushwah
            <h2>Full Stack Web Development</h2>
          </h1>
          <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="hero hero-flex">
        <div className="hero-text">
          <span className="tag">Java Full Stack Developer</span>
          <h1>
            Hi, I’m <span>VANSHIKA KUSHWAH</span>
          </h1>
          <p>
            Passionate Java Full Stack Developer focused on building
            scalable backend systems and clean, responsive frontend
            applications using modern technologies.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Download Resume</button>
            <a href="#projects" className="outline-btn">View Projects</a>
          </div>
        </div>

        <div className="hero-img">
          <img src={profile} alt="Vanshika Kushwah" />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <h2>About Me</h2>
        <p className="center-text">
          I am a motivated Java Full Stack Developer with strong
          fundamentals in Java, Spring Boot, REST APIs, and React.
          I enjoy solving real-world problems, learning new technologies,
          and writing clean, maintainable code.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section gray">
        <h2>Skills</h2>

        <div className="skills">
          <div className="skill-card">
            <h4>Backend</h4>
            <p>Java, Spring Boot, REST APIs, Hibernate</p>
          </div>

          <div className="skill-card">
            <h4>Frontend</h4>
            <p>React, JavaScript, HTML5, CSS3</p>
          </div>

          <div className="skill-card">
            <h4>Database</h4>
            <p>MySQL, PostgreSQL</p>
          </div>

          <div className="skill-card">
            <h4>Tools</h4>
            <p>Git, GitHub, Maven, Postman</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects">
          <div className="card">
            <h3>Event Management System</h3>
            <p>React, JavaScript, HTML, CSS, Bootstrap</p>
            <span>Forms, validations & interactive UI</span>
          </div>

          <div className="card">
            <h3>Web ATM Simulator</h3>
            <p>Frontend Technologies</p>
            <span>ATM workflow simulation</span>
          </div>

          <div className="card">
            <h3>JSP Servlet Login Hub</h3>
            <p>Java, Servlet, JDBC</p>
            <span>Authentication & role-based access</span>
          </div>

          <div className="card">
            <h3>Portfolio Website</h3>
            <p>React & CSS</p>
            <span>Responsive professional portfolio</span>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section gray">
        <h2>Contact</h2>
        <p>Email: <strong>vanshikakushwah2022@gmail.com</strong></p>
        <p className="links">
          <a
            href="https://github.com/vanshika-105"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>{" "}
          |{" "}
          <a
            href="https://www.linkedin.com/in/vanshika-kushwah-105/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer>
        © 2025 Vanshika Kushwah · Java Full Stack Developer
      </footer>

    </div>
  );
}
