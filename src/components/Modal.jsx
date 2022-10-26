import React from "react";
import Cerrar from "../img/cerrar.svg";

export const Modal = ({ setModal, animarModal, setAnimarModal }) => {
  const handleCerrarModal = () => {
    setModal(false);
    setAnimarModal(false);
  };
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={Cerrar} alt="Cerrar" onClick={handleCerrarModal} />
      </div>

      <form className={`formulario ${animarModal ? "animar" : ""}`}>
        <legend>Nuevo Gasto</legend>
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            id="nombre"
            placeholder="Ej. Transporte"
            className="u-full-width"
          />

          <button type="submit" className="boton-primary u-full-width">
            Añadir
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;
