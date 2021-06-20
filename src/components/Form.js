import React, { useContext, useState } from "react";
import { AlertContext } from "../context/alert/alertContext";
import { FirebaseContext } from "../context/firebase/firebaseContext";

export const Form = () => {
  const alert = useContext(AlertContext);
  
  const fireBase = useContext(FirebaseContext)
  const [value, setValue] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if(value.trim()){
        fireBase.addNote(value.trim()).then(()=>{

            alert.show('Notion has been created', 'success')
        }).catch(()=>{
            alert.show('Notion hasnt been created', 'danger')
        })
        setValue('')
    }else{
        alert.show('Write text')
    }
  };
  return (
    <form onSubmit={submitHandler} className={"form-group"}>
      <input
        type="text"
        className="form-control"
        placeholder="Write your notion..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
    </form>
  );
};
