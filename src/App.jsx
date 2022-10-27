import { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import IconoNuevoGasto from "./img/nuevo-gasto.svg";
import { generateId as id } from "./helpers";
import { ListadoGastos } from "./components/ListadoGastos";

function App() {
  const [presupuesto, setPresupuesto] = useState(0);
  const [valido, setValido] = useState(false);
  const [modal, setModal] = useState(false);
  const [animarModal, setAnimarModal] = useState(false);
  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 500);
  };

  const guardarGasto = (gasto) => {
    setGastos([...gastos, { ...gasto, id: id(), fecha: Date.now() }]);
  };
  console.log(gastos);

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
            <ListadoGastos gastos={gastos} />
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
        />
      )}
    </div>
  );
}

export default App;
