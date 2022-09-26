import "./App.css";
import logoMati from "../src/images/logoMati.png";
import ListaDeTareas from "./components/ListaDeTareas";

function App() {
	return (
		<div className="aplicacion-tareas">
			<div className="logoMatiCont">
				<img className="logoMati" src={logoMati} alt="logo" />
			</div>
			<div className="tareas-lista-principal">
				<h1> Mis tareas</h1>
				<ListaDeTareas />
			</div>
		</div>
	);
}

export default App;
