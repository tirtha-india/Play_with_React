import React, { useState, useRef, useEffect } from "react";

function DragDiv({startPoint}) {
    const cx = startPoint.x;
    const cy = startPoint.y;
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


// const LineDrawer = ({ startPoint, endPoint }) => {
//     const canvasRef = useRef(null);
  
//     useEffect(() => {
//       const canvas = canvasRef.current;
//       const context = canvas.getContext('2d');
  
//       // Clear the canvas
//       context.clearRect(0, 0, canvas.width, canvas.height);
  
//       // Draw a line between the given points
//       context.beginPath();
//       context.moveTo(startPoint.x, startPoint.y);
//       context.lineTo(endPoint.x, endPoint.y);
//       context.strokeStyle = 'black';
//       context.lineWidth = 2;
//       context.stroke();
//     }, [startPoint, endPoint]);
  
//     return <canvas ref={canvasRef} width={800} height={600} />;
// };

export default function ReactDrag() {
    const startPoint = { x: 100, y: 100 };
    const endPoint = { x: 500, y: 300 };
    return (
        <div>
            <DragDiv startPoint={startPoint}/>
            <DragDiv startPoint={endPoint}/>
        </div>
    )
}