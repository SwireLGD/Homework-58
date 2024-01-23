import React, { useState } from 'react';
import Modal from '../Modal/Modal';

interface MessagesListProps {
  messages: string[];
  addMessage: (message: string) => void;
}

const MessagesList: React.FC<MessagesListProps> = ({ messages, addMessage }) => {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
        <ul>
            {messages.map((message, index) => (
            <li key={index}>{message}</li>
            ))}
        </ul>
        <form
            onSubmit={(e) => {
            e.preventDefault();
            const newMessage = prompt('Enter a new message:');
            if (newMessage) {
                addMessage(newMessage);
            }
            }}
        >
            <button type="submit" className="btn btn-primary">
            Add Message
            </button>
        </form>
        <button className='btn btn-info mt-3' onClick={() => setShowModal(true)}>Show Modal</button>
        <Modal
            show={showModal}
            onClose={() => setShowModal(false)}
            title='Some Title'
        >
            <div className='modal-body'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, exercitationem eaque voluptate temporibus dolore quidem laudantium voluptatem at consequuntur ab.
            </div>
            <div className='modal-footer'>
                <button
                    className='btn btn-danger'
                    onClick={() => setShowModal(false)}
                >
                    Cancel
                </button>
            </div>
        </Modal>
        </>
    );
};

export default MessagesList;