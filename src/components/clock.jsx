import { useEffect, useState } from "react";

function clockWise() {

    const [clock, setClock] = useState([]);

    useEffect(() => {
            setInterval(() => {
                setClock(new Date().toLocaleTimeString());
        }, 1000)
    }, []);


    return (
        <>
            <h1>{clock}</h1>
        </>
    );
}

export default clockWise;