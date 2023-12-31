import React, { useContext } from "react";
import noteContext from '../context/NoteContext';

function Alert() {
  const context = useContext(noteContext)
  const { alert } = context;

  const capatalize = (word) => {
    if(word === "danger"){
      word = "error";
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}
  return (
    <div style={{ height: "15px" }}>
      {alert && (
        <div
          className={`alert alert-${alert.type} alert-dismissable fade show }`}
          role="alert"
        >
          <strong>{capatalize(alert.type)}</strong> : {alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
