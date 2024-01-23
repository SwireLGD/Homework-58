import React from "react";
import Backdrop from "../Backdrop.tsx/Backdrop";

interface Props extends React.PropsWithChildren {
    show: boolean;
    title: React.ReactNode;
    onClose: React.MouseEventHandler;
};

const Modal: React.FC<Props> = ({show, title, onClose, children}) => {
    return (
    <>
        <Backdrop show={show} onClick={onClose} />
        <div className="modal show" style={{display: show ? 'block' : 'none'}} onClick={onClose}>
            <div className="modal-dialog" onClick={e => e.stopPropagation()}>
                <div className="modal-content">
                    <div className="modal-header">
                        <h2 className="modal-title fs-5">{title}</h2>
                    </div>
                    {children}
                </div>
            </div>
        </div>
    </>
    );
};

export default Modal;