import { useRef } from "react";
import "./CSS/style.css";

const colores = [
  { nombre: "Rojo", valor: "#ff0000" },
  { nombre: "Verde", valor: "#00ff00" },
  { nombre: "Azul", valor: "#0000ff" },
  { nombre: "Amarillo", valor: "#ffff00" },
  { nombre: "Negro", valor: "#000000" }
];

const Header = ({
  abierto,
  onClick,
  colorSeleccionado,
  setColorSeleccionado,
  handleExport,
  handleImport
}) => {
  const fileInputRef = useRef(null);

  const seleccionarColor = (color) => {
    setColorSeleccionado(color);
    onClick?.();
  };

  const handleImportClick = () => {
    fileInputRef.current.click();
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

      <div className="header-botones">
        <button onClick={handleExport}>Exportar</button>
        <button onClick={handleImportClick}>Importar</button>
        <input
          type="file"
          accept=".json"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleImport}
        />
      </div>
    </div>
  );
};


export default Header;
