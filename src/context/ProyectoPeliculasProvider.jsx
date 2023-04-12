import { useEffect, useState } from "react";
import { createContext } from "react";

const PeliculasContext = createContext()

const ProyectoPeliculasProvider = ({ children }) => {

    const [peliculasPopulares, setPeliculasPopulares] = useState([])
    const [peliculasPopularesInfantiles, setPeliculasPopularesInfantiles] = useState([])
    const [peliculasDramas, setPeliculasDramas] = useState([])
    const [peliculasTomCruise, setPeliculasTomCruise] = useState([])
    const [peliculasProximamente, setPeliculasProximamente] = useState([])
    const [modal, setModal] = useState(false)
    const [modalPelícula, setModalPelícula] = useState({})
    const [trailers, setTrailers] = useState({})
    const [modalTrailers, setModalTrailers] = useState(false)
    const [peliculaBuscada, setPeliculaBuscada] = useState("")
    const [peliculasBuscadas, setPeliculasBuscadas] = useState([])
    const [cargando, setCargando] = useState(false)

    useEffect(() => {

        const llamadoAPI = async () => {
            await obtenerPeliculasPopulares()
            await obtenerPeliculasInfantiles()
            await obtenerMejoresDramas()
            await obtenerPeliculasTomCruise()
            await obtenerPeliculasProximamente()

            setCargando(false)
        }

        setCargando(true)
        llamadoAPI()
    }, [])

    const obtenerPeliculasPopulares = async () => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/discover/movie?sort_by=popularity.desc&${import.meta.env.VITE_API_KEY}&append_to_response=videos`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const filtro = resultado.results.filter(peli => peli.poster_path !== null)

            setPeliculasPopulares(filtro);
        } catch (error) {
            console.log(error);
        }

    }

    const obtenerMejoresDramas = async () => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10&${import.meta.env.VITE_API_KEY}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const filtro = resultado.results.filter(peli => peli.poster_path !== null)

            setPeliculasDramas(filtro)
        } catch (error) {
            console.log(error);
        }
    }

    const obtenerPeliculasInfantiles = async () => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&${import.meta.env.VITE_API_KEY}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const filtro = resultado.results.filter(peli => peli.poster_path !== null)

            setPeliculasPopularesInfantiles(filtro)

        } catch (error) {
            console.log(error);
        }
    }

    const obtenerPeliculasTomCruise = async () => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/discover/movie?with_genres=878&with_cast=500&sort_by=vote_average.desc&${import.meta.env.VITE_API_KEY}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const filtro = resultado.results.filter(peli => peli.poster_path !== null)

            setPeliculasTomCruise(filtro)

        } catch (error) {
            console.log(error);
        }
    }

    const obtenerPeliculasProximamente = async () => {
        try {
            const url = `${import.meta.env.VITE_API_URL}/movie/upcoming?${import.meta.env.VITE_API_KEY}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const filtro = resultado.results.filter(peli => peli.poster_path !== null)

            filtro.reverse()

            setPeliculasProximamente(filtro)

        } catch (error) {
            console.log(error);
        }
    }

    const modificarModalPelicula = () => {
        setModal(!modal)
    }

    const modificarModalTrailers = () => {
        setModalTrailers(!modalTrailers)
    }

    const handleModalPelicula = async id => {

        setModalPelícula({})

        try {
            const url = `${import.meta.env.VITE_API_URL}/movie/${id}?${import.meta.env.VITE_API_KEY}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()


            setModalPelícula(resultado)

        } catch (error) {
            console.log(error);
        }
    }

    const handleTrailers = async id => {

        setModalPelícula({})

        try {
            const url = `${import.meta.env.VITE_API_URL}/movie/${id}?${import.meta.env.VITE_API_KEY}&append_to_response=videos`
            const respuesta = await fetch(url)
            const { videos } = await respuesta.json()

            if (videos.results.some(v => v.name.includes('Tráiler Oficial'))) {
                const trailer = videos.results.find(v => v.name.includes('Tráiler Oficial'))
                setTrailers(trailer, 'incluye este bro');
                return;
            } else {
                setTrailers(videos.results[0])
            }

        } catch (error) {
            console.log(error);
        }

    }

    const buscarPelicula = async busqueda => {
        setPeliculaBuscada(busqueda)
        setCargando(true)

        try {
            const url = `${import.meta.env.VITE_API_URL}/search/movie?${import.meta.env.VITE_API_KEY}&query=${busqueda}`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const filtro = resultado.results.filter(peli => peli.poster_path !== null)

            setPeliculasBuscadas(filtro);

        } catch (error) {
            console.log(error);
        }
        setTimeout(() => {

            setCargando(false)
        }, 2000);

    }


    return (
        <PeliculasContext.Provider
            value={{
                peliculasPopulares,
                peliculasPopularesInfantiles,
                peliculasDramas,
                peliculasTomCruise,
                peliculasProximamente,
                peliculaBuscada,
                setPeliculaBuscada,
                modal,
                modificarModalPelicula,
                handleModalPelicula,
                modalPelícula,
                trailers,
                modalTrailers,
                handleTrailers,
                modificarModalTrailers,
                buscarPelicula,
                peliculasBuscadas,
                cargando
            }}

        >
            {children}

        </PeliculasContext.Provider >)
}

export { ProyectoPeliculasProvider }

export default PeliculasContext