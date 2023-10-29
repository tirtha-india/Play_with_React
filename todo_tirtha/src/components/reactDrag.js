import React, { useState } from "react";


const DraggableChild = ({ id, text }) => {
    const handleDragStart = (e) => {
        e.dataTransfer.setData("text/plain", id);
    };

    return (
        <div
            style={{width: "100px", height: "100px", backgroundColor: "white", color: "black"}}
            draggable="true"
            onDragStart={handleDragStart}
        >
            {text}
        </div>
    );
};

const DroppableParent = () => {
    const [draggedItem, setDraggedItem] = useState(null);

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const itemId = e.dataTransfer.getData("text/plain");
        setDraggedItem(itemId);
    };

    return (
        <div 
            style={{height: "300px", width: "100%", border: "2px solid white"}}
            onDragOver={handleDragOver} 
            onDrop={handleDrop}>
            {draggedItem ? `Dropped item: ${draggedItem}` : "Drag a box here"}
        </div>
    );
};

export default function ReactDrag() {
    const [pos, setPos] = useState({ x: 0, y: 0 });
    return (
        <div>
            <DraggableChild id="1" text="Box 1"/>
            <DraggableChild id="2" text="Box 2"/>
            <DroppableParent/>
        </div>

    )
}