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



 

// export default function SmallTodo() {

   

//     const [inputVal, setInputval] = useState("")

//     const [items, setItems] = useState([]);

 

//     function addItem() {

//         setItems([...items, {title: inputVal}])

//         setInputval("");

//     }

 

//     function removeClick(item) {

//         setItems(items.filter((i)=>{

//             return i.title !== item.title

//         }))

//     }

 

//     const listItems = items.map(function(item) {

//         return (

//         <li>

//             <div style={{display: "flex", justifyContent: "space-between", borderBottom: "1px solid black" }}>

//                 <div>

//                     {item.title}

//                 </div>

//                 <button onClick={() => removeClick(item)}>Remove</button>

//             </div>

//         </li>

//     )})

 

//     return(

//         <div>

//             <div style={{display: "flex", paddingLeft: "30px"}}>

//                 <input

//                     type="text"

//                     value={inputVal}

//                     onChange={e => setInputval(e.target.value)}

//                 />

//                 <button onClick={addItem}>Add Items</button>

//             </div>

//             <ol>{listItems}</ol>

//         </div>

//     )

     

// } 