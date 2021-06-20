import React from "react";
import { Form } from "../components/Form";

export const Notes = ({ notes, onRemove}) => {
  return (
    <div className="container mt-4">
      <ul className="list-group">
        {notes.map((note) => {
          if(note){
            return (<li key={note.id} className="list-group-item note">
            <div>
              <strong> {note.title}</strong>
              <small>{note.date}</small>
            </div>

            <button onClick={()=>{onRemove(note.id)}} type="button" className="btn btn-danger">
              &times;
            </button>
          </li>)
          }
          
        })}
      </ul>
    </div>
  );
};
