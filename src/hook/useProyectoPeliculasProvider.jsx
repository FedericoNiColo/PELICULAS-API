import { useContext } from "react";
import PeliculasContext from "../context/ProyectoPeliculasProvider";


const useProyectoPeliculasProvider = () => {
    return useContext(PeliculasContext)
}

export default useProyectoPeliculasProvider