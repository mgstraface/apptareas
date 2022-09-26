import React, { useState } from "react";
import "../Styles/TareaFormulario.css";
import { v4 as uuidv4 } from "uuid";

function TareaFormulario(props) {
	const [input, setInput] = useState("");

	const handlerInputChange = (e) => {
		setInput(e.target.value);
	};

	const manejarEnvio = (e) => {
		e.preventDefault();
		const tareaNueva = {
			id: uuidv4(),
			texto: input,
			completada: false,
		};
		props.onSubmit(tareaNueva);
	};

	return (
		<form className="tareaFormulario" onSubmit={manejarEnvio}>
			<input
				className="tareaInput"
				type="text"
				placeholder="Ingresa una tarea"
				name="texto"
				onChange={handlerInputChange}
			/>
			<button className="tareaBoton">Agregar Tarea</button>
		</form>
	);
}
export default TareaFormulario;
