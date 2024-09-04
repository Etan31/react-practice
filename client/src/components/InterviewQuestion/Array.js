import React, { Fragment, useEffect, useState } from "react";

function Arrayfile() {
   const [arrays, setArrays] = useState([]);

   const getArrays = async () => {
    try {
      const response = await fetch("http://localhost:5000/Array");
      const jsonData = await response.json();

      setArrays(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

   useEffect(() => {
    getArrays();
  }, []);


  return (
    <div>
      <h2>Interview Practice</h2>
         {arrays.map((numbers,index) => (
            <tr key={index}>
               <td>{numbers}</td>
            </tr>
         ))}
    </div>
  );
}

export default Arrayfile;
