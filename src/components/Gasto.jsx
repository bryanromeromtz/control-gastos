import React from "react";
import { formatQuantity, formatDate } from "../helpers";
import iconoAhorro from "../img/icono_ahorro.svg";
import iconoCasa from "../img/icono_casa.svg";
import iconoComida from "../img/icono_comida.svg";
import iconoGastos from "../img/icono_gastos.svg";
import iconoOcio from "../img/icono_ocio.svg";
import iconoSalud from "../img/icono_salud.svg";
import iconoSuscripcion from "../img/icono_suscripciones.svg";

export const Gasto = ({ gasto }) => {
  const { nombre, cantidad, id, categoria, fecha } = gasto;

  // dependiendo de la categoria, se muestra un icono diferente
  const icono = () => {
    switch (categoria) {
      case "hogar":
        return iconoCasa;
      case "comida":
        return iconoComida;
      case "gastos":
        return iconoGastos;
      case "diversion":
        return iconoOcio;
      case "salud":
        return iconoSalud;
      case "suscripciones":
        return iconoSuscripcion;
      case "ahorro":
        return iconoAhorro;
      default:
        return iconoGastos;
    }
  };
  return (
    <div className="gasto sombra">
      <div className="contenido-gasto">
        <img src={icono()} alt={categoria} />
        <div className="descripcion-gasto">
          <p className="categoria">{categoria}</p>
          <p className="nombre-gasto">{nombre}</p>
          <p className="fecha-gasto">Agregado el: {formatDate(fecha)}</p>
        </div>
      </div>
      <p className="cantidad-gasto">$ {formatQuantity(cantidad)}</p>
    </div>
  );
};
