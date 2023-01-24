import { useState,useEffect } from "react";

export default function Cronometro(){
    const [iniciar, setIniciar]= useState(0);
    const [diferencia, setDiferencia]= useState(0);
    let isWorking = true;

    const tick = () =>{
        setDiferencia(new Date(+ new Date() - iniciar));
    };
    const iniciado = () =>{
        isWorking=true;
        setIniciar(+ new Date())
    }

    useEffect(() =>{
        if (iniciar && isWorking) {
            requestAnimationFrame(tick);
        }
        return () => isWorking = false;
    },[iniciar]);

    useEffect(() =>{
        if (diferencia && isWorking){
            requestAnimationFrame(tick);
        }
        return () => isWorking = false;
    },[diferencia]); //

 
    const timeFormat = (date) =>{

        let mm = 0;
        let ss = 0;
        let cm = 0;

        if(!date){
            
            return "00:00:00";
        }
        
        mm = date.getMinutes();
        ss = date.getSeconds();
        cm = Math.round(date.getMilliseconds() /10);

        mm = mm < 10 ? "0" + mm : mm;
        ss = ss < 10 ? "0" + ss : ss;
        cm = cm < 10 ? "0" + cm : cm;

        return `${mm} : ${ss} : ${cm}`;
    }
    let resultado = timeFormat(diferencia);

    const clear = () =>{
       resultado = "00:00:00";
    }

    return(
        <div>
            <button onClick={iniciado}>Iniciar temporizador</button>
            <button onClick={clear}>Reiniciar temporizador</button>
            <h1>{resultado}</h1>
        </div>
    );

}

