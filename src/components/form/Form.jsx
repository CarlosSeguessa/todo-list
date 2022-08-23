import React, { useState } from 'react'

const Form = ( {agregarTarea} ) => {
  const [input, setInput] = useState("");
  const [prioridad, setPrioridad] = useState("");

  const onChangeInput = (e)=>{
    setInput(e.target.value)
  }
  const onChangeSelect = (e)=>{
    setPrioridad(e.target.value)
  }

  const agregarValorInput = () => {
    if (input !== "") {
      agregarTarea({nombre: input,prioridad: prioridad});
      setInput("");
    }
    
  }

    return (
        <>
        <form>
          <input
            id="tarea"
            type="text"
            name="tarea"
            placeholder="Descripción de la tarea"
            required
            onChange={onChangeInput}
            value={input}
          >
          </input>
          <select 
          name="prioridad" 
          id="prioridad"
          onChange={onChangeSelect}
          >
            <option value="x" disabled selected>
              Prioridad
            </option>
            <option value="Baja">baja</option>
            <option value="Media">media</option>
            <option value="Alta">alta</option>
          </select>
          <button onClick={(e) => {
            e.preventDefault()
            agregarValorInput()
          }} id="agregar">Agregar!</button>
        </form>
        </>
    );
}

export default Form;