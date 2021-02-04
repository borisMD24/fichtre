import React from "react";

const AddNotesBtn = (props) => {
    return(
        <button className={"add-btn"} onClick={()=>{props.changeCurrentNote({title : "titre de la nouvelle note", content : "contenu de la nouvelle note", nbr : Math.random()})}}>
            Ajouter une note <span className="bold">+</span>
        </button>
    );
}

export default AddNotesBtn;