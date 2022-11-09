import React from "react";
import Draggable from "react-draggable";
import { MdDelete } from "react-icons/md";

function Note({ title, content, onDelete, id }) {
  return (
    <Draggable>
      <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={() => onDelete(id)}>
        <MdDelete size={25} />
      </button>
    </div>
    </Draggable>
    
  );
}

export default Note;
