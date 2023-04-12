
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import useProyectoPeliculasProvider from "../hook/useProyectoPeliculasProvider"
import { FormatearTiempo } from '../helpers/index'

const ModalPeliculas = () => {

    const { modal, modificarModalPelicula, modalPelícula } = useProyectoPeliculasProvider()

    const { title, backdrop_path, overview, runtime, vote_average, genres, release_date } = modalPelícula

    return (
        <>
            <Transition appear show={modal} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    onClose={() => {
                        
                        modificarModalPelicula()
                    }}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full lg:w-2/4 2xl:w-2/4 transform overflow-hidden rounded bg-gray-900 p-6 text-left align-middle shadow-xl transition-all ">
                                    <Dialog.Title
                                        as="h3"
                                        className=" p-1 text-start md:text-3xl text-xl border-b-2 border-b-gray-700 font-medium uppercase leading-6 text-gray-300"
                                    >
                                        {title}
                                    </Dialog.Title>


                                    <div>
                                        <img src={`${import.meta.env.VITE_IMAGEN_URL}${backdrop_path}`} alt="" />

                                        <div className='mt-2 flex items-center text-gray-500 gap-2'>

                                            {genres?.map(gen => (
                                                <p>{gen.name} </p>
                                            ))}

                                        </div>

                                        <div className='flex items-center gap-4'>
                                            <div className='flex items-center text-gray-400 gap-2 mt-1'>

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                <p className='text-gray-600 my-2'>Duracion: {FormatearTiempo(runtime)} </p>

                                            </div>

                                            <div className='flex items-center text-gray-400 gap-2'>

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                                </svg>
                                                <p className='text-gray-600 my-2'>{release_date} </p>

                                            </div>


                                        </div>
                                        <p className='text-gray-300 my-2'>{overview}</p>
                                    </div>



                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition >
        </>
    )
}

export default ModalPeliculas
