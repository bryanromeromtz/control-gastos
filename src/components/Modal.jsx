import { useState, useEffect } from "react";

import { Mensaje } from "./Mensaje";

import Cerrar from "../img/cerrar.svg";

export const Modal = ({
  setModal,
  animarModal,
  setAnimarModal,
  guardarGasto,
  gastoEditar,
  setGastoEditar,
}) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState(null);
  const [id, setId] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setNombre(gastoEditar.nombre);
      setCantidad(gastoEditar.cantidad);
      setCategoria(gastoEditar.categoria);
      setId(gastoEditar.id);
      setFecha(gastoEditar.fecha);
    }
  }, [gastoEditar]);

  const handleCerrarModal = () => {
    setTimeout(() => {
      setModal(false);
    }, 500);
    setAnimarModal(false);
    handleSetGastoEditar();
  };

  const handleSetGastoEditar = () => {
    if (Object.keys(gastoEditar).length > 0) {
      setTimeout(() => {
        setGastoEditar({});
      }, 500);
    }
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
        id,
        nombre,
        cantidad,
        categoria,
        fecha,
      });
      setMensaje(null);
      handleSetGastoEditar();
    } catch (error) {
      console.log(error);
    }
  };
  console.log(gastoEditar);
  return (
    <div className="modal">
      <div className="cerrar-modal">
        <img src={Cerrar} alt="Cerrar" onClick={handleCerrarModal} />
      </div>

      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}`}
      >
        <legend>{gastoEditar.id ? "Editar Gasto" : "Nuevo Gasto"}</legend>
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
          value={gastoEditar.id ? "Editar Gasto" : "Agregar Gasto"}
        />
      </form>
    </div>
  );
};

export default Modal;
