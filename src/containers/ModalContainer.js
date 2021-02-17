import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Modal from '../components/Modal'
import comfirmIcon from '../../svg/comfirmIcon.svg'
import { hideModal } from '../redux/actions/modalAction'

function ModalContainer() {
    const dispatch = useDispatch() 
    return (
        <Modal>
            <Modal.Wrapper>
                <button 
                    onClick={() => dispatch(hideModal())}
                    style={{
                        border: 'none',
                        cursor: 'pointer',
                        backgroundColor: 'transparent',
                        fontSize: '2rem',
                        width: '50px',
                        textAlign: 'end',
                        transform: 'translateX(400px)'
                    }}
                >X</button>
                <Modal.Heading>
                    <Modal.Logo src={comfirmIcon}/>
                    <Modal.Title>Booking comfirmed!</Modal.Title>
                </Modal.Heading>
                <Modal.Text>
                    Thank you for trusting our services. Your booking has been added to your account. You can review it there.
                </Modal.Text>
                <Modal.ComfirmButton><Link to='/account'>Check your account</Link></Modal.ComfirmButton>
            </Modal.Wrapper>
        </Modal>
    )
}

export default ModalContainer
