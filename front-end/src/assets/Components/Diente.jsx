import { useState } from "react";
import "./CSS/style.css";

const Diente = ({
  colorSeleccionado,
  numero,
  cuadrante,
  onCambioColores,
  datosDiente = {}
}) => {
  const {
    deshabilitado = false,
    arriba = "#ffffff",
    centro = "#ffffff",
    izquierda = "#ffffff",
    derecha = "#ffffff",
    abajo = "#ffffff"
  } = datosDiente;

  const idDiente = `${cuadrante}${numero}`;

  const cambiarColor = (seccion) => {
    if (deshabilitado) return;

    const nuevoColor = datosDiente[seccion] === colorSeleccionado.valor ? "#ffffff" : colorSeleccionado.valor;

    onCambioColores(idDiente, {
      ...datosDiente,
      [seccion]: nuevoColor
    });
  };

  const deshabilitarDiente = () => {
    const nuevoEstado = !deshabilitado;

    const nuevosColores = nuevoEstado
      ? {
          arriba: "#ffffff",
          centro: "#ffffff",
          izquierda: "#ffffff",
          derecha: "#ffffff",
          abajo: "#ffffff"
        }
      : {
          arriba,
          centro,
          izquierda,
          derecha,
          abajo
        };

    onCambioColores(idDiente, {
      ...nuevosColores,
      deshabilitado: nuevoEstado
    });
  };

  return (
    <div className="contenedor-diente">
      <div className="numero-diente" onClick={deshabilitarDiente}>
        {idDiente}
      </div>

      <div className={`diente ${deshabilitado ? "diente-deshabilitado" : ""}`}>
        <div className="seccion arriba" style={{ backgroundColor: arriba }} onClick={() => cambiarColor("arriba")} />
        <div className="seccion abajo" style={{ backgroundColor: abajo }} onClick={() => cambiarColor("abajo")} />
        <div className="seccion izq" style={{ backgroundColor: izquierda }} onClick={() => cambiarColor("izquierda")} />
        <div className="seccion der" style={{ backgroundColor: derecha }} onClick={() => cambiarColor("derecha")} />
        <div className="centro" style={{ backgroundColor: centro }} onClick={() => cambiarColor("centro")} />

        <div className="linea-diagonal-izq"></div>
        <div className="linea-diagonal-der"></div>
      </div>
    </div>
  );
};


export default Diente;
