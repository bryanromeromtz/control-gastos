import { useState, useEffect } from "react";

import Header from "./components/Header";
import Modal from "./components/Modal";
import { Filtros } from "./components/Filtros";
import { ListadoGastos } from "./components/ListadoGastos";

import { generateId as id } from "./helpers";

import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(
    Number(localStorage.getItem("presupuesto")) || 0
  );
  const [valido, setValido] = useState(false); // presupuesto valido
  const [gastos, setGastos] = useState(
    JSON.parse(localStorage.getItem("gastos")) || []
  );
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastoEditar, setGastoEditar] = useState({});
  const [filtro, setFiltro] = useState("");
  const [gastosFiltrados, setGastosFiltrados] = useState([]);

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      const gastoActualizado = gastos.map((g) => {
        if (g.id === gasto.id) {
          return gasto;
        }
        return g;
      });
      setGastos(gastoActualizado);
    } else {
      setGastos([...gastos, { ...gasto, id: id(), fecha: Date.now() }]);
    }
  };

  const eliminarGasto = (gasto) => {
    const gastoEliminado = gastos.map((g) => {
      if (g.id === gasto.id) {
        return gasto;
      }
      return g;
    });
    gastoEliminado.splice(gastoEliminado.indexOf(gasto), 1);
    setGastos(gastoEliminado);
  };

  useEffect(() => {
    if (Object.keys(gastoEditar).length > 0) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 500);
    }
  }, [gastoEditar]);

  useEffect(() => {
    // guardamos el presupuesto en el localstorage
    localStorage.setItem("presupuesto", presupuesto || 0);
  }, [presupuesto]);

  useEffect(() => {
    // guardamos el presupuesto del localstorage en una variable
    const presupuestoLS = localStorage.getItem("presupuesto");
    // si el presupuesto es mayor a 0, es valido
    if (presupuestoLS > 0) {
      setValido(true);
    }
  }, []);

  useEffect(() => {
    // guardamos el array de gastos en el localstorage
    localStorage.setItem("gastos", JSON.stringify(gastos) || []);
  }, [gastos]);

  useEffect(() => {
    // filtramos los gastos dependiendo de la categoria seleccionada
    if (filtro !== "") {
      const filtrarGastos = gastos.filter(
        (gasto) => gasto.categoria === filtro
      );
      setGastosFiltrados(filtrarGastos);
    }
  }, [filtro]);

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        setGastos={setGastos}
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        valido={valido}
        setValido={setValido}
      />

      {valido && (
        <div>
          <main>
            <Filtros filtro={filtro} setFiltro={setFiltro} />
            <ListadoGastos
              gastos={filtro ? gastosFiltrados : gastos}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt="Nuevo Gasto"
              onClick={handleNuevoGasto}
            />
          </div>
        </div>
      )}

      {modal && (
        <Modal
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
          gastoEditar={gastoEditar}
          setGastoEditar={setGastoEditar}
        />
      )}
    </div>
  );
}

export default App;
