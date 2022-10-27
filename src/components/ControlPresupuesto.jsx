import React from "react";
import { formatQuantity } from "../helpers";

export const ControlPresupuesto = ({ presupuesto }) => {
  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div className="columna">
        <p>
          <span>Grafica Aqui</span>
        </p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto:</span> $ {formatQuantity(presupuesto)}
        </p>
        <p>
          <span>Disponible:</span> $ {formatQuantity(presupuesto)}
        </p>
        <p>
          <span>Gastado:</span> $ {formatQuantity(presupuesto)}
        </p>
      </div>
    </div>
  );
};
