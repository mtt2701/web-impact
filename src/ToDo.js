import React, { useState } from "react";
import { FaRegSquare, FaRegSquareCheck } from "react-icons/fa6";

const ToDo = (props) => {
    const [isComplete, setIsComplete] = useState(false);

    return (
        <div style={{
            border: "2px solid black",
            borderRadius: 15,
            width: "40vw",
            margin: "10px auto",
            padding: 10,
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            flexWrap: "wrap"
        }}>
            <div style={{ cursor: "pointer" }} onClick={() => setIsComplete(!isComplete)}>
                {isComplete ? <FaRegSquareCheck size={40} /> : <FaRegSquare size={40} />}
            </div>
            <h2 style={{ marginLeft: 10 }}>{props.text}</h2>
        </div>
    );
}

export default ToDo;