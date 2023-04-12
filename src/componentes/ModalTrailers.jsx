
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import useProyectoPeliculasProvider from "../hook/useProyectoPeliculasProvider"
import { FormatearTiempo } from '../helpers/index'
import YouTube from 'react-youtube';
const ModalTrailers = () => {

    const { modalTrailers, trailers, modificarModalTrailers } = useProyectoPeliculasProvider()

    const { key } = trailers

    return (
        <>
            <Transition appear show={modalTrailers} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={modificarModalTrailers}>
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
                                <Dialog.Panel className="w-full lg:w-3/4 h-[500px] lg:h-[680px] 2xl:h-[1000px] transform overflow-hidden rounded bg-gray-900 p-6 text-left align-middle shadow-xl transition-all ">
                                    {
                                        key !== undefined ? (

                                            <YouTube
                                                videoId={key}
                                                className="h-full w-full"

                                                opts={{
                                                    width: "100%",
                                                    height: "100%"
                                                }}

                                            />) : <p>No hay Trailer Disponible</p>
                                    }
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default ModalTrailers
