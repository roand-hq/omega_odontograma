import { useState } from 'react'
import './App.css'
import Diente from './assets/Components/Diente'
import Header from './assets/Components/Header'
function App() {
  const colores = [
    { nombre: "Rojo", valor: "#ff0000" },
    { nombre: "Verde", valor: "#00ff00" },
    { nombre: "Azul", valor: "#0000ff" },
    { nombre: "Amarillo", valor: "#ffff00" },
    { nombre: "Negro", valor: "#000000" }
  ];
  const [abierto, setAbierto] = useState(false)
  const [colorSeleccionado, setColorSeleccionado] = useState(colores[0])


  // Inicialización de todos los dientes con valores predeterminados
  const inicializarEstadoDientes = () => {
    const dientes = {};
    const cuadrantes = [1, 2, 3, 4]; // O los números que usas en tus cuadrantes
    for (let cuadrante of cuadrantes) {
      for (let numero = 1; numero <= 8; numero++) {
        const idDiente = `${cuadrante}${numero}`;
        dientes[idDiente] = {
          deshabilitado: false,  // Estado por defecto
          arriba: "#ffffff",    // Color por defecto
          centro: "#ffffff",    // Color por defecto
          izquierda: "#ffffff", // Color por defecto
          derecha: "#ffffff",   // Color por defecto
          abajo: "#ffffff",     // Color por defecto
        };
      }
    }
    return dientes;
  };

  const [estadoDientes, setEstadoDientes] = useState(inicializarEstadoDientes());

  const manejarCambioColores = (idDiente, data) => {
    setEstadoDientes((prev) => ({
      ...prev,
      [idDiente]: { ...prev[idDiente], ...data }, // Solo actualiza el diente específico
    }));
  };

  const generarJSON = () => {
    const jsonFinal = JSON.stringify(estadoDientes, null, 2);
    console.log(jsonFinal);
    // Crear un Blob con el contenido del JSON
    const blob = new Blob([jsonFinal], { type: "application/json" });
    // Crear una URL de objeto para el Blob
    const url = URL.createObjectURL(blob);
    // Crear un enlace de descarga
    const a = document.createElement("a");
    a.href = url;
    a.download = "dientes_estado.json"; // Nombre del archivo de descarga
    // Simular un clic en el enlace para iniciar la descarga
    a.click();
    // Liberar la URL de objeto
    URL.revokeObjectURL(url);

    alert("JSON generado y descargado.");
  };

  

  return (
    <>
      <Header
        abierto={abierto}
        onClick={() => { setAbierto(!abierto) }}
        colorSeleccionado={colorSeleccionado}
        setColorSeleccionado={setColorSeleccionado}
        handleExport={generarJSON}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto 4px auto",
          gridTemplateRows: "auto 4px auto",
          justifyContent: "center",
          alignItems: "center",
          position: "relative"
        }}
      >
        {/* Cuadrante 1 */}
        <div style={{ gridColumn: 1, gridRow: 1, textAlign: "center" }}>
          <div style={{ fontWeight: "bold", marginBottom: 6 }}> 1</div>
          <div style={{ display: "flex", gap: 4 }}>
            {["8", "7", "6", "5", "4", "3", "2", "1"].map((n, i) => (
              <Diente
                colorSeleccionado={colorSeleccionado}
                numero={n}
                cuadrante={"1"}
                onCambioColores={manejarCambioColores}
              />))}
          </div>
        </div>

        {/* Cuadrante 2 */}
        <div style={{ gridColumn: 3, gridRow: 1, textAlign: "center" }}>
          <div style={{ fontWeight: "bold", marginBottom: 6 }}> 2</div>
          <div style={{ display: "flex", gap: 4 }}>
            {["1", "2", "3", "4", "5", "6", "7", "8"].map((n, i) => (
              <Diente
                colorSeleccionado={colorSeleccionado}
                numero={n}
                cuadrante={"2"}
                onCambioColores={manejarCambioColores}
              />))}
          </div>
        </div>

        {/* Cuadrante 4 */}
        <div style={{ gridColumn: 1, gridRow: 3, textAlign: "center" }}>
          <div style={{ display: "flex", gap: 4 }}>
            {["8", "7", "6", "5", "4", "3", "2", "1"].map((n, i) => (
              <Diente
                colorSeleccionado={colorSeleccionado}
                numero={n}
                cuadrante={"4"}
                onCambioColores={manejarCambioColores}
              />))}
          </div>
          <div style={{ fontWeight: "bold", marginTop: 6 }}> 4</div>
        </div>

        {/* Cuadrante 3 */}
        <div style={{ gridColumn: 3, gridRow: 3, textAlign: "center" }}>
          <div style={{ display: "flex", gap: 4 }}>
            {["1", "2", "3", "4", "5", "6", "7", "8"].map((n, i) => (
              <Diente
                colorSeleccionado={colorSeleccionado}
                numero={n}
                cuadrante={"3"}
                onCambioColores={manejarCambioColores}
              />))}
          </div>
          <div style={{ fontWeight: "bold", marginTop: 6 }}> 3</div>
        </div>

        {/* Línea vertical */}
        <div style={{
          gridColumn: 2,
          gridRow: "1 / 4",
          backgroundColor: "black",
          width: "4px",
          height: "100%",
          justifySelf: "center"
        }} />

        {/* Línea horizontal */}
        <div style={{
          gridColumn: "1 / 4",
          gridRow: 2,
          backgroundColor: "black",
          height: "4px",
          width: "100%",
          alignSelf: "center"
        }} />
      </div>
    </>





  )
}

export default App
