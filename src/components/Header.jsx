import React from "react";
import { ControlPresupuesto } from "./ControlPresupuesto";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({ presupuesto, setPresupuesto, valido, setValido, gastos }) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      {valido ? (
        <ControlPresupuesto presupuesto={presupuesto} gastos={gastos} />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setValido={setValido}
        />
      )}
    </header>
  );
};

export default Header;
