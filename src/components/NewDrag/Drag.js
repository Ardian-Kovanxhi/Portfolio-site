import { useEffect, useState } from "react"

export default function NewDrag() {
    const [pos, setPos] = useState([200, 200])

    // const handleClick = () => {
    //     console.log
    // }
    useEffect(() => { })

    return (
        <img
            style={{ width: "800px", position: "absolute", top: pos[0], left: pos[1], zIndex: 1000 }}
            onMouseDown={() => console.log(Date.now())}
            onMouseUp={() => alert("hi :>")}

            src="https://static.vecteezy.com/system/resources/previews/030/580/534/large_2x/whimsical-cute-wizard-cat-generate-ai-photo.jpg"
        />
    )
}