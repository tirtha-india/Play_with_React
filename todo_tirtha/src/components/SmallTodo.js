import React, { useState } from "react";

export default function SmallTodo() {
    const [todoList, setTodoList] = useState([]);
    const [item, setItem] = useState('');

    function addItem() {
        setTodoList([...todoList, item]);
        setItem('');
    }

    function removeItem(idx) {
        setTodoList(todoList.filter((v, i)=>{
            return i!==idx;
        }))
    }

    const items = todoList.map((val, idx) => {
        return (
           <li key={idx}>
               <div>
                   <p>{val}</p>
                   <button onClick={()=> removeItem(idx)}>Remove</button>
               </div>
           </li>
        )
       })

    return (
        <div>
            <input
                value={item}
                placeholder="write something"
                onChange={(e)=>setItem(e.target.value)}
            />
            <button onClick={addItem}>Add</button>
            <ol>
                {items}
            </ol>
        </div>
    )
}
 