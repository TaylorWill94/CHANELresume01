import React from "react";
import Popup from "reactjs-popup";
import "./Popup.css";
import "reactjs-popup/dist/index.css";

export default () => (
  <Popup
    trigger={<button className="click"> TRIGGER</button>}
    position="center"
  >
    <div className="content">
      Popup content here !! trigger=
      {<button className="click"> TRIGGER</button>}
    </div>
  </Popup>
);
