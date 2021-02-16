import React from 'react'
import Modal from '../components/Modal'
import comfirmIcon from '../../svg/comfirmIcon.svg'

function ModalContainer() {
    return (
        <Modal>
            <Modal.Wrapper>
                <Modal.Heading>
                    <Modal.Logo src={comfirmIcon}/>
                    <Modal.Title>Booking comfirmed!</Modal.Title>
                </Modal.Heading>
                <Modal.Text>
                    Thank you for trusting our services. Your booking has been added to your account. You can review it there.
                </Modal.Text>
                <Modal.ComfirmButton>Check your account</Modal.ComfirmButton>
            </Modal.Wrapper>
        </Modal>
    )
}

export default ModalContainer
