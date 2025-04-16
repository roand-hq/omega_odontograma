import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
  return (
    <>
    <Header
      abierto={abierto}
      onClick={() => { setAbierto(!abierto) }}
      colorSeleccionado={colorSeleccionado}
      setColorSeleccionado={setColorSeleccionado}
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
            <Diente key={`q1-${i}`} numero={n} colorSeleccionado={colorSeleccionado} />
          ))}
        </div>
      </div>
  
      {/* Cuadrante 2 */}
      <div style={{ gridColumn: 3, gridRow: 1, textAlign: "center" }}>
        <div style={{ fontWeight: "bold", marginBottom: 6 }}> 2</div>
        <div style={{ display: "flex", gap: 4 }}>
          {["1", "2", "3", "4", "5", "6", "7", "8"].map((n, i) => (
            <Diente key={`q2-${i}`} numero={n} colorSeleccionado={colorSeleccionado} />
          ))}
        </div>
      </div>
  
      {/* Cuadrante 3 */}
      <div style={{ gridColumn: 1, gridRow: 3, textAlign: "center" }}>
        <div style={{ display: "flex", gap: 4 }}>
          {["8", "7", "6", "5", "4", "3", "2", "1"].map((n, i) => (
            <Diente key={`q3-${i}`} numero={n} colorSeleccionado={colorSeleccionado} />
          ))}
        </div>
        <div style={{ fontWeight: "bold", marginTop: 6 }}> 3</div>
      </div>
  
      {/* Cuadrante 4 */}
      <div style={{ gridColumn: 3, gridRow: 3, textAlign: "center" }}>
        <div style={{ display: "flex", gap: 4 }}>
          {["1", "2", "3", "4", "5", "6", "7", "8"].map((n, i) => (
            <Diente key={`q4-${i}`} numero={n} colorSeleccionado={colorSeleccionado} />
          ))}
        </div>
        <div style={{ fontWeight: "bold", marginTop: 6 }}> 4</div>
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
