// import React, { useState } from "react";

// export default function SwitchDiv() {

//     const [initialContent, setinitialContent] = useState([]);

//     const [finalContent, setFinalContent] = useState([]);

//     const initialElemments = initialContent.map((value)=>{
//         return (
//             <li>
//                 {value.val}
//             </li>
//         )
//     })

//     const onClickHandler = () => {
//         setFinalContent(finalContent, ...initialContent);
//         console.log(finalContent)
//         console.log(...initialContent)
//         setinitialContent([{}]);
//     }

//     return (
//         <div>
//             <div style={{display: "flex"}}>
//                 <div style={{backgroundColor: "orange", width: "250px", height: "250px"}}>
//                     {
//                         initialContent.map((value)=>{
//                             return(
//                                 <li>
//                                     {value.val}
//                                 </li>
//                             )
//                         })
//                     }
//                 </div>
//                 <div style={{backgroundColor: "green", width: "250px", height: "250px"}}>
//                     <ul>
//                         {
//                             finalContent.map((value)=>{
//                                 return(
//                                     <li>
//                                         {value.val}
//                                     </li>
//                                 )
//                             })
//                         }
//                     </ul>
                    
//                 </div>
//             </div>
//             <button onClick={onClickHandler}>Transfer</button>
//         </div>
//     )
// }


import React, { useState } from 'react';

export default function SwitchDiv() {
  const [currentItems, setCurrentItems] = useState([
    { id: 1, name: 'Item 1', isChecked: false },
    { id: 2, name: 'Item 2', isChecked: false },
    { id: 3, name: 'Item 3', isChecked: false },
  ]);

  const [finalItems, setFinalItems] = useState([]);

  const handleCheckboxChange = (itemId) => {
    setCurrentItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const handleTransfer = () => {
    const checkedItems = currentItems.filter((item) => item.isChecked);

    setFinalItems((prevItems) => [...prevItems, ...checkedItems]);

    setCurrentItems((prevItems) =>
      prevItems.filter((item) => !item.isChecked)
    );
  };

  return (
    <div>
      <div>
        <h2>Current Items</h2>
        <ul>
          {currentItems.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                checked={item.isChecked}
                onChange={() => handleCheckboxChange(item.id)}
              />
              {item.name}
            </li>
          ))}
        </ul>
        {currentItems.some((item) => item.isChecked) && (
          <button onClick={handleTransfer}>Transfer</button>
        )}
      </div>
      <div>
        <h2>Final Items</h2>
        <ul>
          {finalItems.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

