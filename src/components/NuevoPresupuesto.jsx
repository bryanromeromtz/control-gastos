import React from "react";

const NuevoPresupuesto = () => {
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <h2>Nuevo Presupuesto</h2>
      <form className="formulario">
        <div className="campo">
          <label htmlFor="presupuesto">Presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Ej. 3000"
            id="presupuesto"
          />
          <input
            type="submit"
            className="button-primary u-full-width"
            value="Añadir"
          />
        </div>
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
