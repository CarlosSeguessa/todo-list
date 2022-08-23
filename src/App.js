import "./style.css";
import Form from "./components/form/Form";
import Tareas from "./components/tareas/Tareas";
import { useState } from "react";

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (tarea) => {
    setTareas([...tareas, tarea]);

  }
  const eliminarTarea = (tarea) => {
    const x = tareas.filter(element => element.name !== tarea.name );
    setTareas([...tareas]);
    console.log(tarea)
    console.log(x)
    console.log(tareas)
  }
  return (
    <div className="App">
      <main>
        <h1>Lista de tareas!</h1>
        <Form agregarTarea = {agregarTarea}  />
        <Tareas tareas={tareas} eliminarTarea = {eliminarTarea} />
      </main>
    </div>
  );
}

export default App;
