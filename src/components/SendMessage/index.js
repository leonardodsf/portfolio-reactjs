import React from "react";
import { FiMessageSquare } from "react-icons/fi";
import "./styles.css";

function SendMessage() {
  return (
    <div className="div-send-message">
      <a href="https://api.whatsapp.com/send?phone=5551995849500&text=Olá%20Leonardo,%20tudo%20bem?%20Estou%20entrando%20em%20contato%20para%20saber%20mais%20sobre%20você.%20Meu%20nome%20é">
        <div className="send-message">
          <FiMessageSquare size={30} />
        </div>
      </a>
    </div>
  );
}

export default SendMessage;
