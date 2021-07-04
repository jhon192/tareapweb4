import React from "react";

const Data = (prop) => {
  const { Info, searchData } = prop;

  return (
    <div>
      <div>
        <div className="inputSearch">
          <form onSubmit={searchData}>
            <div>
              <input
                type="text"
                name="data"
                placeholder="Ingrese su dato a buscar"
              />
            </div>
            <div>
              <input type="submit" value="buscar datos" />
            </div>
          </form>
        </div>
        <div>
          <table>
            <tr>
              <th>nombre</th>
              <th>apellido</th>
              <th>telefono</th>
            </tr>
            {Info.map((x) => (
              <tbody>
                <td>{x.nombre}</td>
                <td>{x.apellido}</td>
                <td>{x.telefono}</td>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Data;
