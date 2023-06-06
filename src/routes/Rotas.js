import React from "react";

import { Route, Routes as ReactRouter } from 'react-router-dom'
import { useLocation} from 'react-router-dom';
import { useEffect } from "react";


import Inicio from "../pages/Inicio";
import SobreNos from "../pages/SobreNos";
import ParaVoce from "../pages/ParaVoce";
import SuaEmpresa from "../pages/SuaEmpresa";
import Atendimento from "../pages/Atendimento";


const Rotas = () => {

   const location = useLocation();

   useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    

   return (

      <ReactRouter>
         <Route path='*' element={<Inicio />} />
         <Route path='/sobrenos' element={<SobreNos />} />
         <Route path='/paravoce' element={<ParaVoce />} />
         <Route path='/suaempresa' element={<SuaEmpresa />} />
         <Route path='/atendimento' element={<Atendimento />} />

      </ReactRouter>


   )
}

export default Rotas;