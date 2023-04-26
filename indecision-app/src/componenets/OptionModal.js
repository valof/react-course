import React from 'react'
import Modal from 'react-modal'

const OptionModal = (props) => (
        <Modal
            isOpen={!!props.selectedOption}      
            contentLabel={props.selectedOption}
            onRequestClose={props.handleRemoveSelected}
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Selected Option</h3>
            {props.selectedOption && <p className = "modal__body">{props.selectedOption}</p>}
            <button className="button"
                onClick={(e) => {
                props.handleRemoveSelected();
                }}>
            Close Me!</button>
        </Modal>
    );

export default OptionModal;