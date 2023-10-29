import React, { useState } from "react";

export default function ReactDrag() {
    const [pos, setPos] = useState({x:0, y:0});

    return (
        <div>
            <div
                draggable
                onDragEnd={(e)=>{
                    setPos({x:e.clientX, y:e.clientY})
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