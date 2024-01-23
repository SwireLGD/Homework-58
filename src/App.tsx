import React, { useState } from 'react';
import Appbar from './Components/Appbar/Appbar';
import MessagesList from './Components/MessageList/MessageList';

const App: React.FC = () => {
  const [messages, setMessages] = useState<string[]>(['Message 1', 'Message 2', 'Message 3']);
  const addMessage = (message: string) => {
    setMessages((prevMessages) => [...prevMessages, message]);
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
      </main>
    </>
  );
};

export default App;