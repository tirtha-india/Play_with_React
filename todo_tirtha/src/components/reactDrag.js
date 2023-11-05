import React, { useState } from "react";

export default function ReactDrag({cx, cy}) {
    const [pos, setPos] = useState({x:cx, y:cy});

    return (
        <div style={{height: "l00%", width: "100%"}}>
            <div
                draggable
                onDragEnd={(e)=>{
                    setPos({x:e.clientX, y:e.clientY})
                    console.log(pos.x , pos.y);
                }}
                style={{
                    position: "absolute",
                    top: pos.y,
                    left: pos.x,
                    width: "20px",
                    height: "20px",
                    borderRadius: "50%",
                    backgroundColor: "yellow"
                }}
            >
            </div>
        </div>
        
    )
}