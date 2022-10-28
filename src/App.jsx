import { useState, useEffect } from "react";

import Header from "./components/Header";
import Modal from "./components/Modal";
import { ListadoGastos } from "./components/ListadoGastos";

import { generateId as id } from "./helpers";

import IconoNuevoGasto from "./img/nuevo-gasto.svg";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [valido, setValido] = useState(false); // presupuesto valido
  const [gastos, setGastos] = useState([]);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastoEditar, setGastoEditar] = useState({});
  const [gastoEliminar, setGastoEliminar] = useState({});

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

  return (
    <div className={modal ? "fijar" : ""}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        valido={valido}
        setValido={setValido}
      />

      {valido && (
        <div>
          <main>
            <ListadoGastos
              gastos={gastos}
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
