import { useRef } from "react";
import "./CSS/style.css";

const colores = [
  { nombre: "Rojo", valor: "#ff0000" },
  { nombre: "Verde", valor: "#00ff00" },
  { nombre: "Azul", valor: "#0000ff" },
  { nombre: "Amarillo", valor: "#ffff00" },
  { nombre: "Negro", valor: "#000000" }
];

const Header = ({ abierto, onClick, colorSeleccionado, setColorSeleccionado }) => {
  const fileInputRef = useRef(null);

  const seleccionarColor = (color) => {
    setColorSeleccionado(color);
    onClick?.(); // Cierra si estaba abierto
  };

  const handleExport = () => {
    //aqui vas a poner lo que se va a hacer al exportar
  };

  const handleImportClick = () => {
    fileInputRef.current.click(); // Simula el click en el input
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const json = JSON.parse(event.target.result);
        setColorSeleccionado(json); // Establece el color importado
        console.log("Color importado:", json);
      } catch (error) {
        console.error("Archivo JSON inválido:", error);
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="Header">
      <label>Selecciona un color:</label>
      <div className="combo-color" onClick={onClick}>
        <div className="combo-opcion">
          <span
            className="cuadro-color"
            style={{ backgroundColor: colorSeleccionado.valor }}
          ></span>
          <span className="nombre-color">{colorSeleccionado.nombre}</span>
        </div>
        {abierto && (
          <ul className="combo-lista">
            {colores.map((color) => (
              <li
                key={color.valor}
                className="combo-opcion"
                onClick={() => seleccionarColor(color)}
              >
                <span
                  className="cuadro-color"
                  style={{ backgroundColor: color.valor }}
                ></span>
                <span className="nombre-color">{color.nombre}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Botones de exportar e importar */}
      <div className="header-botones">
        <button onClick={handleExport}>Exportar</button>
        <button onClick={handleImportClick}>Importar</button>
        <input
          type="file"
          accept=".json"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>
    </div>
  );
};

export default Header;
