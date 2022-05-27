import React, { useState, useEffect } from "react";
import Devices from "./devices";

/**
 * Function that represents the rooms component.
 * @param {*} props
 * @returns
 */
function Rooms(props) {
  let [spaceSelec] = useState(props.spaceSelected);
  let [rooms, setRooms] = useState([]);
  let [roomSelec, setRoomSelec] = useState();
  
  useEffect(() => {
    const url = 
      "https://gist.githubusercontent.com/josejbocanegra/92c90d5f2171739bd4a76d639f1271ea/raw/9effd124c825f7c2a7087d4a50fa4a91c5d34558/rooms.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let roomsSpace = [];
        data.forEach((d) => {
          if (String(d.homeId) === spaceSelec) {
            roomsSpace.push(d);
          }
          else{
            console.log(d.homeId);
          }
        });
        setRooms(roomsSpace);
      });
  }, [spaceSelec]);

  function roomSelecHandler(room) {
    setRoomSelec(room);
  }
  return (
    <div className="container mt-4 mb-5">
      <h1>My rooms</h1>
      <div className="row">
        <div className={roomSelec != null ? "col-8" : "col-10"}>
          <div className="row">
            {rooms.map((r) => {
              return (
                <div className="col" key={r.name}>
                  <div className="card" onClick={() => roomSelecHandler(r)}>
                    <div className="card-body">
                      <h5 className="card-title">{r.name}</h5>
                    </div>
                    <img
                      src={
                        String(r.name).startsWith("Kitchen")
                          ? "https://i.imgur.com/hjBHerg.png"
                          : "https://i.imgur.com/YsrzXGx.png"
                      }
                      className="card-img-top"
                      alt={r.name}
                      style={{ height: "14rem" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={roomSelec != null ? "col-4" : ""}>
          {roomSelec != null ? (
            <Devices devicesRoom={roomSelec.devices} />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Rooms;
