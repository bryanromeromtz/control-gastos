import { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import toast, { Toaster } from "react-hot-toast";

import { formatQuantity } from "../helpers";

export const ControlPresupuesto = ({
  presupuesto,
  gastos,
  setGastos,
  setPresupuesto,
  setValido,
}) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);
  const [porcentaje, setPorcentaje] = useState(0);

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

    if (porcentaje > 99.99) {
      setTimeout(() => {
        toast.error("¡No tienes más presupuesto disponible!");
      }, 1000);
    }

    setGastado(totalGastado);
    setDisponible(totalDisponible);
    setTimeout(() => {
      setPorcentaje(porcentajeGastado);
    }, 1000);
  }, [gastos]);

  const handleReset = () => {
    const confirmar = window.confirm(
      "¿Estás seguro de que quieres reiniciar el presupuesto?"
    );
    if (confirmar) {
      setPresupuesto(0);
      setGastos([]);
      setValido(false);
    }
  };

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <Toaster />
      <div className="columna">
        <CircularProgressbar
          value={porcentaje}
          text={`${porcentaje}%`}
          styles={buildStyles({
            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",
            // Text size
            textSize: "16px",
            // si el porcentaje es mayor a 50, cambia el color del texto si no es otro color
            textColor: porcentaje >= 100 ? "#ef233c" : "#06d6a0",
            pathColor: porcentaje >= 100 ? "#ef233c" : "#06d6a0",
            trailColor: "#f5f5f5",
            backgroundColor: "#3e98c7",
          })}
        />
      </div>
      <div className="contenido-presupuesto">
        <button className="reset-app" type="button" onClick={handleReset}>
          Resetear App
        </button>
        <p>
          <span>Presupuesto:</span> $ {formatQuantity(presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""}`}>
          <span>Disponible:</span> $ {formatQuantity(disponible)}
        </p>
        <p>
          <span>Gastado:</span> $ {formatQuantity(gastado)}
        </p>
      </div>
    </div>
  );
};
