import useProyectoPeliculasProvider from "../hook/useProyectoPeliculasProvider"
import { handlePorcentaje } from '../helpers/index'

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const PeliculasBuscadas = () => {
    const { peliculasBuscadas, modificarModalPelicula, handleModalPelicula } = useProyectoPeliculasProvider()

    return (
        <div className="flex flex-wrap m-auto w-5/6 relative md:top-28 top-8">

            {
                peliculasBuscadas?.map(peli => (
                    <div key={peli.id} className='relative m-auto p-2 hover:opacity-90 '>
                        <img
                            src={`${import.meta.env.VITE_IMAGEN_URL}${peli.poster_path}`}
                            alt={`${peli.title}`}
                            className="h-96"
                        />


                        <div className=' flex flex-col gap-2 items-center justify-around absolute top-4 left-4 '>

                            {
                                handlePorcentaje(`${peli.vote_average}`) > 70 ? (

                                    <CircularProgressbar
                                    value={handlePorcentaje(`${peli.vote_average}`)}
                                    text={`${handlePorcentaje(peli.vote_average)}%`}
                                        background={true}
                                        styles={buildStyles({
                                            pathColor: '#08fa18',
                                            textColor: '#ffffff',
                                            trailColor: '#ffffff',
                                            backgroundColor: 'rgb(17 24 39 /1',
                                            textSize: '30px'
                                        })}
                                        className="h-10 w-10"
                                    />
                                ) : (
                                    <CircularProgressbar
                                    value={handlePorcentaje(`${peli.vote_average}`)}
                                    text={`${handlePorcentaje(peli.vote_average)}%`}
                                        background={true}
                                        styles={buildStyles({
                                            pathColor: '#df1a0c',
                                            textColor: '#ffffff',
                                            trailColor: '#ffffff',
                                            backgroundColor: 'rgb(17 24 39 /1',
                                            textSize: '30px'
                                        })}
                                        className=" h-10 w-10"
                                    />
                                )
                            }
                            
                            <div className='text-sm h-10 w-10 bg-black/60 rounded-full hover:bg-gray-900 '>
                                <div className="text-white  h-3 w-3 md:h-5 md:w-5 lg:h-8 lg:w-8 hover:text-gray-300 cursor-pointer">
                                    <p
                                        onClick={() => {
                                            modificarModalPelicula()
                                            handleModalPelicula(`${peli.id}`)
                                        }}
                                        className="cursor-pointer"
                                    > <svg className="h-10 w-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                                        </svg>
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>


                ))
            }

        </div>
    )
}

export default PeliculasBuscadas
