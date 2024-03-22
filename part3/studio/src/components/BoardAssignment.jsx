import { useState } from 'react';

export default function BoardAssignment () {
   
   const  [boardName, setName] =useState("no boards yet!")
   const boards = [
      {label: "breakfast", value:"breakfast"},
      {lavel: "lunch", value:"lunch"},
      {dinner: "dinner", value:"dinner"}];

   const handleChange = (event) => {
       setName(event.target.value);
   }

   return (
      <div style={{paddingTop: "50px"}}>
      <label>Save to Board: </label>
      <select value={boardName} onChange={handleChange}>
         <option value="breakfast">"breakfast" </option>
         <option value="lunch">"lunch"</option>
         <option value="dinner">"dinner"</option>
      </select>

      <p>Saved to {boardName}!</p>
      </div>
   );
}
