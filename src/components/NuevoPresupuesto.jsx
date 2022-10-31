import { useState } from "react";

import { Mensaje } from "./Mensaje";

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setValido }) => {
  const [mensaje, setMensaje] = useState(null);
  const handlePresupuesto = (e) => {
    e.preventDefault();
    try {
      // Validar que el presupuesto sea un número
      if (isNaN(Number(e.target.presupuesto.value))) {
        setMensaje("El presupuesto debe ser un número");
        return;
      } else if (!presupuesto) {
        setMensaje("El presupuesto no puede ser 0");
        return;
      } else if (presupuesto < 1) {
        setMensaje("El presupuesto debe ser mayor a 0");
        return;
      }
      setMensaje(null);
      setValido(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      <form onSubmit={handlePresupuesto} className="formulario">
        <div className="campo">
          <label htmlFor="presupuesto">Presupuesto</label>
          <input
            type="number"
            className="nuevo-presupuesto"
            placeholder="Ej. 3000"
            id="presupuesto"
            value={presupuesto}
            onChange={(e) => setPresupuesto(Number(e.target.value))}
          />
          <input type="submit" className="button-primary " value="Añadir" />
          {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        </div>
      </form>
    </div>
  );
};

export default NuevoPresupuesto;
