import { useState } from "react";
import Cerrar from "../img/cerrar.svg";
import { Mensaje } from "./Mensaje";

export const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
}) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState(null);

  const handleCerrarModal = () => {
    setTimeout(() => {
      setModal(false);
    }, 500);
    setAnimarModal(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      // Validar que el nombre no esté vacío
      if (nombre.trim() === "") {
        setMensaje("El nombre no puede estar vacío");
        return;
      } else if (cantidad < 1 || isNaN(cantidad)) {
        setMensaje("La cantidad debe ser mayor a 0");
        return;
      } else if (categoria.trim() === "") {
        setMensaje("La categoría no puede estar vacía");
        return;
      }
      handleCerrarModal();
      guardarGasto({
        nombre,
        cantidad,
        categoria,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={Cerrar} alt="Cerrar" onClick={handleCerrarModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>Nuevo Gasto</legend>
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            id="nombre"
            placeholder="Ej. Transporte"
            className="u-full-width"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad Gasto</label>
          <input
            type="number"
            id="cantidad"
            placeholder="Ej. 300"
            className="u-full-width"
            value={cantidad}
            onChange={(e) => setCantidad(parseInt(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoría</label>
          <select
            name="categoria"
            id="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            <option value="">--Seleccione--</option>
            <option value="ahorro">Ahorro</option>
            <option value="transporte">Transporte</option>
            <option value="comida">Comida</option>
            <option value="hogar">Hogar</option>
            <option value="salud">Salud</option>
            <option value="ropa">Ropa</option>
            <option value="diversion">Diversión</option>
            <option value="suscripciones">Suscripciones</option>
            <option value="gastos">Gastos Varios</option>
            <option value="otros">Otros</option>
          </select>
        </div>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Agregar Gasto"
        />
      </form>
    </div>
  );
};

export default Modal;
