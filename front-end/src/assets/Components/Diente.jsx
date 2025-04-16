import { useState } from "react";
import "./CSS/style.css";

const Diente = ({ colorSeleccionado, numero }) => {
  const [colores, setColores] = useState({
    arriba: "#ffffff",
    abajo: "#ffffff",
    izq: "#ffffff",
    der: "#ffffff",
    centro: "#ffffff",
  });

  const [deshabilitado, setDeshabilitado] = useState(false); // Estado que controla si el diente está deshabilitado

  const cambiarColor = (seccion) => {
    if (deshabilitado) return; // Si está deshabilitado, no hace nada

    setColores((prev) => ({
      ...prev,
      [seccion]: prev[seccion] === colorSeleccionado.valor ? "#ffffff" : colorSeleccionado.valor,
    }));
  };

  const deshabilitarDiente = () => {
    if (!deshabilitado) {
      // Si se va a deshabilitar, restablecer todos los colores a blanco
      setColores({
        arriba: "#ffffff",
        abajo: "#ffffff",
        izq: "#ffffff",
        der: "#ffffff",
        centro: "#ffffff",
      });
    }
    setDeshabilitado(!deshabilitado); // Cambiar el estado de deshabilitado
  };

  return (
    <div className="contenedor-diente">
      {/* Número encima del diente */}
      <div className="numero-diente" onClick={deshabilitarDiente}>
        {numero}
      </div>

      <div className={`diente ${deshabilitado ? "diente-deshabilitado" : ""}`}>
        <div
          className="seccion arriba"
          style={{ backgroundColor: colores.arriba }}
          onClick={() => cambiarColor("arriba")}
        ></div>

        <div
          className="seccion abajo"
          style={{ backgroundColor: colores.abajo }}
          onClick={() => cambiarColor("abajo")}
        ></div>

        <div
          className="seccion izq"
          style={{ backgroundColor: colores.izq }}
          onClick={() => cambiarColor("izq")}
        ></div>

        <div
          className="seccion der"
          style={{ backgroundColor: colores.der }}
          onClick={() => cambiarColor("der")}
        ></div>

        <div
          className="centro"
          style={{ backgroundColor: colores.centro }}
          onClick={() => cambiarColor("centro")}
        ></div>

        <div className="linea-diagonal-izq"></div>
        <div className="linea-diagonal-der"></div>
      </div>
    </div>
  );
};

export default Diente;
