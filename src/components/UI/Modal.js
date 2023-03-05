import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
    return (
        <div id="backdrop" className={classes.backdrop} onClick={props.onClose}></div>
    );
};

const ModalOverlay = (props) => {
    return (
        <div id="modal" className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalContainer = document.getElementById('overlay');

const Modal = (props) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalContainer)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalContainer)}
        </Fragment>
    );
};

export default Modal;

