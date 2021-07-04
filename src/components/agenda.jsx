import React from "react";

const agenda = (prop) => {
  const { postData } = prop;
  return (
    <div className="inputContainer">
          <form onSubmit={postData}>
          <div>
            <h4>Agenda</h4>
          </div>
            <div>
              <input
                type="text"
                name="nombre"
                placeholder="Ingrese su nombre"
              />
            </div>
            <div>
              <input
                type="text"
                name="apellido"
                placeholder="Ingrese su apellido"
              />
            </div>
            <div>
              <input
                type="number"
                name="telefono"
                placeholder="Ingrese su numero"
              />
            </div>
            <div>
              <input type="submit" name="btn" value="Enviar datos" />
            </div>
          </form>
        </div>
  );
};

export default agenda;
