import { useState } from "react"
import useProyectoPeliculasProvider from "../hook/useProyectoPeliculasProvider"
import SwipeReproductor from "./SwipeReproductor"
import { SwiperSlide } from 'swiper/react';

const Headers = () => {

    const { peliculaBuscada, setPeliculaBuscada, peliculasPopulares, handleTrailers, modificarModalTrailers, buscarPelicula } = useProyectoPeliculasProvider()

    const [buscador, setBuscador] = useState(false)

    return (
        <header
            className="bg-cover bg-center-top w-full h-[350px] md:h-[700px] lg:h-[500px] xl:h-[700px] 2xl:h-[980px] relative"
        >
            <nav className='flex justify-around items-center gap-3 md:h-20 p-1'>

                <img
                    src="./assets/img/netflix.png"
                    alt="imagen netflix"
                    className='w-1/3 md:w-32'
                />

                <div className='flex items-center justify-end gap-4'>
                    {buscador &&
                        <input
                            id='buscador'
                            type="text"
                            value={peliculaBuscada}
                            className='bg-gray-300 rounded-sm text-md md:text-lg w-2/3 p-0.5 gap-2'
                            onChange={e => { buscarPelicula(e.target.value) }}
                        />
                    }
                    <label htmlFor="buscador" onClick={() => setBuscador(!buscador)} className='text-white hover:text-gray-400 cursor-pointer'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </label>
                    <img
                        src="./assets/img/icono.png"
                        alt="imagen-perfil"
                        className="h-fit mr-5 rounded-sm md:w-10"
                    />
                </div>
            </nav>


            <SwipeReproductor >
                {
                    peliculasPopulares.map(peli => (
                        <SwiperSlide key={peli.id}>
                            <div className=" flex justify-center lg:justify-start p-1 gap-2 w-full text-white absolute bottom-2 md:left-5 lg:bottom-12 lg:left-16">
                                <button
                                    type="button"
                                    className="flex items-center rounded-md p-0.5 lg:p-2 bg-gray-800 bg-opacity-80 text-md w-1/2 md:w-2/6 lg:w-1/6 md:h-14 h-8 2xl:w-1/12"
                                >

                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:h-10 h-6" >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                    </svg>
                                    Más información
                                </button>

                                <button
                                    type="button"
                                    className="flex items-center gap-1 rounded-md p-0.5 lg:p-2 bg-gray-800 bg-opacity-80 text-md hover:opacity-90 w-1/2 md:w-2/6 lg:w-1/6 md:h-14 h-8 2xl:w-1/12"
                                    onClick={() => {
                                        modificarModalTrailers()
                                        handleTrailers(`${peli.id}`)
                                    }}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="md:h-10 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                    </svg>


                                    Ver Trailer
                                </button>
                            </div>
                            <img
                                src={`${import.meta.env.VITE_IMAGEN_URL}${peli.backdrop_path}`}
                                alt={`${peli.id}`}
                                className="object-cover bg-center-top w-full h-[300px] md:h-[700px] lg:h-[500px] xl:h-[700px] 2xl:h-[980px]"
                            />
                        </SwiperSlide>
                    ))
                }
            </SwipeReproductor>

        </header>
    )
}

export default Headers
