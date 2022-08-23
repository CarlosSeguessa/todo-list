import React from "react";

const Tareas = ({tareas,eliminarTarea}) => {
  return (
    <>
      <h3>Tareas</h3>
      <ul id="lista-tareas">
        {tareas.map((tarea,i) => {
          const prioridad = tarea.prioridad
          let prioridadClase = '';
          if (prioridad === 'Alta'){
            prioridadClase = 'prioridad-alta'
          }else if (prioridad === 'Media') {
          prioridadClase = 'prioridad-media'
          }else if (prioridad === 'Baja') {
            prioridadClase = 'prioridad-baja'
          }
          return(
          <li onClick={() => {
            eliminarTarea(tarea)
            console.log("xd");
            }} key={i} className={ prioridad ? prioridadClase : null}>{tarea?.nombre} - Prioridad: {tarea?.prioridad}</li>
          )
        })}
      </ul>
      <p className="tips">Tip: Pueden borrar tareas clickeando en ellas</p>
    </>
  );
};

export default Tareas;
