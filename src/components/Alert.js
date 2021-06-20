import React, { useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Alert = () => {
  const { alert, hide } = useContext(AlertContext);
  if (!alert.visible) {
    return null;
  }
  return (
    <div className={`alert-flex alert alert-${alert.type || "warning"} alert-dismissible`} role="alert">
     <div> <strong>Heyyy </strong> {alert.text}</div>
      
      <button onClick={hide} type="button" className="close btn btn-light" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
