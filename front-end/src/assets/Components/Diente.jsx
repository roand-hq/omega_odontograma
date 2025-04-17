import { useState } from "react";
import "./CSS/style.css";

const Diente = ({ colorSeleccionado, numero, cuadrante, onCambioColores }) => {
  const [colores, setColores] = useState({
    arriba: "#ffffff",
    abajo: "#ffffff",
    izq: "#ffffff",
    der: "#ffffff",
    centro: "#ffffff"
  });

  const [deshabilitado, setDeshabilitado] = useState(false); // Estado que controla si el diente está deshabilitado

  // Generar el identificador único para cada diente
  const idDiente = `${cuadrante}${numero}`;

  const cambiarColor = (seccion) => {
    if (deshabilitado) return;
  
    setColores((prev) => {
      const nuevosColores = {
        ...prev, //recibimos los valores anteriores
        
        //Aqui revisamos la seccion que fue cambiada y la comparamos con los valores anteriores
        //Si el valor anterior es el color seleccionado, lo pasa a blanco, sino, lo pasa al
        //color seleccionado
        [seccion]: prev[seccion] === colorSeleccionado.valor ? "#ffffff" : colorSeleccionado.valor,
      };
      //Solo se ejecuta si se ha recibido onCambioColores
      if (onCambioColores) {
        //Este onCambioColores vendria a ser el manejarCambioColores que se encuentra en App.jsx
        //Es decir, aqui solo le estoy pasando valores para que ejecute la función
        onCambioColores(idDiente, {
          deshabilitado,
          arriba: nuevosColores.arriba,
          centro: nuevosColores.centro,
          izquierda: nuevosColores.izq,
          derecha: nuevosColores.der,
          abajo: nuevosColores.abajo
        });
        ;
      }
      return nuevosColores;
    });
  };

  const deshabilitarDiente = () => {
    const nuevoEstado = !deshabilitado;
  
    const coloresReset = {
      arriba: "#ffffff",
      abajo: "#ffffff",
      izq: "#ffffff",
      der: "#ffffff",
      centro: "#ffffff",
    };
  
    // Si lo estás deshabilitando, reinicia los colores
    if (nuevoEstado) {
      setColores(coloresReset);
    }
  
    setDeshabilitado(nuevoEstado);
  
    // Llamar a onCambioColores con el nuevo estado
    if (onCambioColores) {
      onCambioColores(idDiente, {
        deshabilitado: nuevoEstado,
        arriba: coloresReset.arriba,
        centro: coloresReset.centro,
        izquierda: coloresReset.izq,
        derecha: coloresReset.der,
        abajo: coloresReset.abajo
      });
    }
  };
  

 

  return (
    <div className="contenedor-diente">
      {/* Número y cuadrante del diente */}
      <div className="numero-diente" onClick={deshabilitarDiente}>
        {idDiente}
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
