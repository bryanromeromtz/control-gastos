import React from "react";

export const ControlPresupuesto = ({ presupuesto }) => {
  const formatearPresupuesto = (cantidad) => {
    return cantidad
      .toLocaleString("es-ES", {
        style: "currency",
        currency: "MXN",
      })
      .replace("MXN", "");
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div className="columna">
        <p>
          <span>Grafica Aqui</span>
        </p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span> $ {formatearPresupuesto(presupuesto)}
        </p>
        <p>
          <span>Disponible:</span> $ {formatearPresupuesto(0)}
        </p>
        <p>
          <span>Gastado:</span> $ {formatearPresupuesto(0)}
        </p>
      </div>
    </div>
  );
};
