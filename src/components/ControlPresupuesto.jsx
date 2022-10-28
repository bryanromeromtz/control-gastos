import { useEffect, useState } from "react";

import { formatQuantity } from "../helpers";

export const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    let totalGastado = gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );
    setGastado(totalGastado);
    setDisponible(presupuesto - totalGastado);
  }, [gastos]);

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
          <span>Disponible:</span> $ {formatQuantity(disponible)}
        </p>
        <p>
          <span>Gastado:</span> $ {formatQuantity(gastado)}
        </p>
      </div>
    </div>
  );
};
