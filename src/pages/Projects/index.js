import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import "./style.css";
import logo from "../../assets/logo.png";
import Button from "../../components/Button";
import SendMessage from "../../components/SendMessage";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import api from "../../services/api";
const arraySort = require("array-sort");

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    setSpinner(true);
    api.get("repos").then((response) => {
      let projects = arraySort(response.data, "created_at").slice(-4).reverse();
      setProjects(projects);
      setSpinner(false);
    });
  }, []);

  return (
    <>
      <header>
        <nav>
          <div className="header-home ">
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="div-back-link">
            <Link to="/" className="back-link">
              <FiArrowLeft className="back-link-icon" size={20} />
              <span>Voltar</span>
            </Link>
          </div>
        </nav>
      </header>
      <main>
        <div className="div-main-title">
          <h1>ÚLTIMOS PROJETOS</h1>
        </div>
        <div className="div-main-card">
          {spinner ? (
            <Loader
              type="Oval"
              color="#11cc64"
              height={50}
              width={50}
              // timeout={3000} //3 secs
            />
          ) : (
            projects.map((project) => (
              <div key={project.name} className="card">
                <h2>{project.name}</h2>
                <h5>Clique aqui para abrir o projeto</h5>
                <a href={project.html_url} className="open-project">
                  <h3>Abrir projeto</h3>
                </a>
              </div>
            ))
          )}
        </div>
        <div className="div-main-feedback">
          <div>
            <h2>Gostou?</h2>
          </div>
          <div className="div-btn-message">
            <a href="mailto:contatoleonardoflores@gmail.com">
              <Button title="Envie uma mensagem" />
            </a>
          </div>
        </div>
      </main>
      <section>
        <div>
          <SendMessage />
        </div>
      </section>
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
