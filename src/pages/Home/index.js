import React from "react";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./styles.css";
import logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import mainSvg from "../../assets/main-svg.svg";
import Button from "../../components/Button";
import SendMessage from "../../components/SendMessage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  function handleToastify() {
    toast.dark("🚀 Este projeto está em beta.", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <>
      <header>
        <nav>
          <div className="header-home">
            <img src={logo} alt="Logo" />
            <img
              src={bars}
              className="icon-bars"
              onClick={handleToastify}
              alt="icon-bars"
            />
          </div>
        </nav>
      </header>
      <main>
        <div className="main">
          <div className="div-about">
            <h1>Hello!</h1>
            <h2>Eu sou desenvolvedor front-end</h2>
            <h3>
              Em busca de oportunidades. Atualmente trabalho como estagiário em
              desenvolvimento web. Tenho o objetivo de me tornar um
              desenvolvedor Fullstack, e para isto estou estudando React, React
              Native e Node entre outras tecnologias. Também estudo Design
              UI/UX, pois sou apaixonado por design. Utilizando Figma para criar
              interfaces Web e Mobile.
            </h3>
            <div className="div-icons">
              <a href="https://instagram.com/mecnosh">
                <FiInstagram className="icon-instagram" size={28} />
              </a>
              <a href="https://github.com/leonardodsf">
                <FiGithub className="icon-github" size={28} />
              </a>
              <a href="https://www.linkedin.com/in/leonardo-santos-flores/">
                <FiLinkedin className="icon-linkedin" size={28} />
              </a>
            </div>
            <div className="div-btnHome">
              <Link to="/projects">
                <Button title="Ver meus projetos" />
              </Link>
            </div>
          </div>
          <div className="div-background-svg">
            <img src={mainSvg} alt="Background main svg" />
          </div>
        </div>
      </main>
      <section>
        <SendMessage />
      </section>
      <article>
        <ToastContainer
          className="toast-container"
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </article>
      <footer>
        <div className="div-footer">
          <h4>
            <span>Made with</span> <b>❤</b> Leonardo Flores
          </h4>
        </div>
      </footer>
    </>
  );
}

export default Home;
