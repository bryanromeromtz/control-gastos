import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { formatQuantity } from "../helpers";

export const ControlPresupuesto = ({ presupuesto, gastos }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);
  const [green, setGreen] = useState("");
  const [red, setRed] = useState("");

  useEffect(() => {
    let totalGastado = gastos.reduce(
      (total, gasto) => total + gasto.cantidad,
      0
    );
    let totalDisponible = presupuesto - totalGastado;
    let porcentajeGastado = (
      ((presupuesto - totalDisponible) / presupuesto) *
      100
    ).toFixed(2);
    if (porcentaje > 50) {
      setRed("red");
    } else {
      setGreen("green");
    }
    setGastado(totalGastado);
    setDisponible(totalDisponible);
    setTimeout(() => {
      setPorcentaje(porcentajeGastado);
    }, 1000);
  }, [gastos]);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div className="columna">
        <CircularProgressbar
          value={porcentaje}
          text={`${porcentaje}%`}
          styles={buildStyles({
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",
            // Text size
            textSize: "16px",
            pathColor: `rgb(255, 214, 10, ${porcentaje})`,
            // si el porcentaje es mayor a 50, cambia el color del texto si no es otro color
            textColor: porcentaje > 50 ? red : green,
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        />
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
