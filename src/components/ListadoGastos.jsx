import React from "react";

import { Gasto } from "./Gasto";

export const ListadoGastos = ({ gastos, setGastoEditar, eliminarGasto }) => {
  return (
    <div className="listado-gastos contenedor">
      <h2>{gastos.length > 0 ? "Gastos Realizados" : "No hay gastos"}</h2>
      {gastos.map((gasto) => (
        <Gasto
          key={gasto.id}
          gasto={gasto}
          setGastoEditar={setGastoEditar}
          eliminarGasto={eliminarGasto}
        />
      ))}
    </div>
  );
};
