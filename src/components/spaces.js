import React, { useState, useEffect } from "react";
import Rooms from "./rooms";

/**
 * Function that represents the spaces component.
 * @returns
 */
function Spaces() {
  let [space, setSpaces] = useState([]);
  let [spaceSelec, setSpaceSelec] = useState();
  
  useEffect(() => {
    const url =
      "https://gist.githubusercontent.com/josejbocanegra/0067d2b28b009140fee423cfc84e40e6/raw/6e6b11160fbcacb56621b6422684d615dc3a0d33/spaces.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setSpaces(data);
      });
  }, []);

  function spaceSelecHandler(space) {
    setSpaceSelec(space);
  }
  return (
    <div className="container mt-4">
      <div className="row">
        {space.map((s) => {
          return (
            <div className="col-3" key={s.id}>
              <div className="card" onClick={() => spaceSelecHandler(s)}>
                <img
                  src={
                    String(s.name).startsWith("Casa")
                      ? "https://i.imgur.com/iTypNlv.png"
                      : "https://i.imgur.com/QMd5FDa.png"
                  }
                  className="card-img-top"
                  alt={s.name}
                  style={{ height: "14rem" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{s.name}</h5>
                  <p className="card-text">{s.address}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {spaceSelec != null ? <Rooms spaceSelected={spaceSelec.id} /> : null}
    </div>
  );
}

export default Spaces;
