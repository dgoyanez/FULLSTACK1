import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Listado from "./Listado";

const JugadorAdmin = () =>{
    const [datos, setDatos] = useState([]);

    return(
        <React.Fragment>
            <Routes>
                <Route path="listado" element={<Listado datos={datos}/>} />
            </Routes>
        </React.Fragment>
    )
}

export default JugadorAdmin;