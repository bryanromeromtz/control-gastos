import { useState, useEffect } from "react";

export const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombra contenedor">
      <form>
        <div className="campo">
          <label htmlFor="filtro">Filtrar por:</label>
          <select
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            name="filtro"
            id="filtro"
          >
            <option value="">-- Todos --</option>
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
      </form>
    </div>
  );
};
