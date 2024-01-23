import React, { useState } from 'react';
import Appbar from './Components/Appbar/Appbar';
import MessagesList from './Components/MessageList/MessageList';
import Alert from './Components/Alert/Alert';

const App: React.FC = () => {
  const [messages, setMessages] = useState<string[]>(['Message 1', 'Message 2', 'Message 3']);
  const [showAlert, setShowAlert] = useState(true);

  const addMessage = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <>
      <header>
        <Appbar />
      </header>
      <main className="container-fluid">
        <div className='mt-5'>
          <h1>Messages</h1>
          <MessagesList messages={messages} addMessage={addMessage} />
        </div>
        <Alert
          type="warning"
          onDismiss={closeAlert}
          show={showAlert}>
            This is a warning type alert
        </Alert>
        <Alert
          type="success"
          show={showAlert}>
            This is a success type alert
        </Alert>
      </main>
    </>
  );
};

export default App;