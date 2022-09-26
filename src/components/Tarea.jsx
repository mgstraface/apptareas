import React from "react";
import "../Styles/Tarea.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
	return (
		<div className={completada ? "tareaCont completada" : "tareaCont"}>
			<div className="tareaText" onClick={() => completarTarea(id)}>
				{texto}
			</div>
			<div className="tareaContenedorIconos" onClick={() => eliminarTarea(id)}>
				<AiOutlineCloseCircle className="tareaIcono" />
			</div>
		</div>
	);
}

export default Tarea;
