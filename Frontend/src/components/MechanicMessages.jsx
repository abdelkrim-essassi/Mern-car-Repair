import { useState } from 'react';
import '../styles/MechanicMessages.css';

const initialMessages = [
  {
    id: 1,
    customer: 'Sarah K.',
    date: '2025-04-12',
    message: 'Can you confirm if you have availability this week?',
    status: 'Unread',
  },
  {
    id: 2,
    customer: 'John M.',
    date: '2025-04-10',
    message: 'Thanks for the great service!',
    status: 'Read',
  },
];

function MechanicMessages() {
  const [messages, setMessages] = useState(initialMessages);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [response, setResponse] = useState('');

  const handleMarkAsRead = (id) => {
    setMessages(
      messages.map((msg) =>
        msg.id === id && msg.status === 'Unread' ? { ...msg, status: 'Read' } : msg
      )
    );
  };

  const handleSendResponse = (e) => {
    e.preventDefault();
    alert(`Response sent to ${selectedMessage.customer}: ${response}`);
    setResponse('');
    setSelectedMessage(null);
  };

  return (
    <div className="mechanic-messages">
      <h3>Messages</h3>
      {selectedMessage ? (
        <div className="message-reply">
          <h4>Reply to {selectedMessage.customer}</h4>
          <p><strong>Message:</strong> {selectedMessage.message}</p>
          <form onSubmit={handleSendResponse}>
            <textarea
              value={response}
              onChange={(e) => setResponse(e.target.value)}
              placeholder="Type your response..."
              required
            />
            <div className="reply-actions">
              <button type="submit">Send</button>
              <button type="button" onClick={() => setSelectedMessage(null)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="message-list">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`message ${msg.status === 'Unread' ? 'unread' : ''}`}
              onClick={() => {
                handleMarkAsRead(msg.id);
                setSelectedMessage(msg);
              }}
            >
              <p><strong>From:</strong> {msg.customer}</p>
              <p><strong>Date:</strong> {msg.date}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <p><strong>Status:</strong> {msg.status}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MechanicMessages;