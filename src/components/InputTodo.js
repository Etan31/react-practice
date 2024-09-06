import React, { Fragment, useState } from "react";

const InputTodo = () => {

   const [description, setDescription] = useState("");

   const onSubmitForm = async (e) => {
      e.preventDefault();

      try {
         const body = { description };

         // This will fetch the data inside the body which is the description.
         const response = await fetch("http://localhost:5000/todos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
         });

         console.log("responsedfgd: ",response);
      } catch (error) {
         console.error('error submitting form:', error.message);
      }
   }

   return (
      <Fragment>
         <div className="inputTodo-container">
            <h1>Pern Todo task</h1>
            <p>This project uses CRUD method with PERN Stack.</p>
         </div>
         <form className="form-inputTodo" onSubmit={onSubmitForm}>
            <input type="text" name="" id=""  value={description} onChange={e => setDescription(e.target.value)} />
            <button>Submit</button>
         </form>
      </Fragment>
   )
}

export default InputTodo;