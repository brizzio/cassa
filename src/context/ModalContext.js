import React, { useContext, useState } from 'react'
import Modal from '../components/Modal/Modal'


const ModalContext = React.createContext()
const ModalUpdateContext = React.createContext()

export function useModal() {
    return useContext(ModalContext)
}

export function useModalUpdate(){
    return useContext(ModalUpdateContext)
}

export function ModalProvider({ children }) {

    const [modalOpen, setModalOpen] = useState(false);

    function toggleModal() {
        setModalOpen(prev => !prev)
    }

   
    return (
        <ModalContext.Provider value = {modalOpen}>
            <ModalUpdateContext.Provider value = {toggleModal}>
                {modalOpen && <Modal />}
                {children}
                
            </ModalUpdateContext.Provider>
        </ModalContext.Provider>
    )

}

