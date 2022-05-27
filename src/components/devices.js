import React, { useState } from "react";

/**
 * Function that represents the devices component.
 * @param {*} props
 * @returns
 */
function Devices(props) {
  let [devices] = useState(props.devicesRoom);
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Id</th>
          <th scope="col">Device</th>
          <th scope="col">Value</th>
        </tr>
      </thead>
      <tbody>
        {devices.map((d, index) => {
          return (
            <tr>
              <th scope="row">{index}</th>
              <td>{d.id}</td>
              <td>{d.name}</td>
              <td>{d.desired.value}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Devices;
