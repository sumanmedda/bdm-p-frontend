import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SendMails() {
  const [subject, setSubject] = useState('');
  const [messageTemplate, setMessageTemplate] = useState('');
  const [sending, setSending] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [recipients, setRecipients] = useState([]);

  // This would typically come from an API or database
  const availableRecipients = [
    { name: "John Doe", email: "john@example.com" },
    { name: "Jane Smith", email: "jane@example.com" },
    { name: "Bob Johnson", email: "bob@example.com" },
    { name: "Alice Williams", email: "alice@example.com" },
    { name: "Charlie Brown", email: "charlie@example.com" },
  ];

  const sendEmail = async (recipient) => {
    const personalizedMessage = messageTemplate.replace('[NAME]', recipient.name);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Sending email to ${recipient.name} (${recipient.email}):`, { 
      subject, 
      message: personalizedMessage 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    for (let i = 0; i < recipients.length; i++) {
      setCurrentIndex(i);
      await sendEmail(recipients[i]);
    }

    setSending(false);
    setCurrentIndex(0);
    alert("All emails sent successfully!");
  };

  const removeRecipient = (index) => {
    setRecipients(recipients.filter((_, i) => i !== index));
  };

  const addRecipient = (e) => {
    const selectedEmail = e.target.value;
    const selectedRecipient = availableRecipients.find(r => r.email === selectedEmail);
    if (selectedRecipient && !recipients.some(r => r.email === selectedEmail)) {
      setRecipients([...recipients, selectedRecipient]);
    }
    e.target.value = ''; // Reset dropdown
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Send Bulk Emails</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label custom-label-dir">Add Recipient:</label>
          <select className="form-select" onChange={addRecipient}>
            <option value="">Select a recipient</option>
            {availableRecipients.map((recipient) => (
              <option key={recipient.email} value={recipient.email}>
                {recipient.name} ({recipient.email})
              </option>
            ))}
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label custom-label-dir">Recipients:</label>
          <ul className="list-group">
            {recipients.map((recipient, index) => (
              <li key={index} className={`list-group-item d-flex justify-content-between align-items-center ${index === currentIndex && sending ? 'active' : ''}`}>
                <span>{recipient.name} ({recipient.email})</span>
                <button 
                  type="button" 
                  className="btn btn-danger btn-sm" 
                  onClick={() => removeRecipient(index)}
                  disabled={sending}
                >
                  &times;
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-3">
          <label htmlFor="subject" className="form-label custom-label-dir">Subject:</label>
          <input
            type="text"
            className="form-control"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label custom-label-dir ">Message Template:</label>
          <textarea
            className="form-control"
            id="message"
            rows="10"
            value={messageTemplate}
            onChange={(e) => setMessageTemplate(e.target.value)}
            required
            placeholder="Use [NAME] to insert the recipient's name. For example: 'Dear [NAME], ...'"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary" disabled={sending || recipients.length === 0}>
          {sending ? 'Sending...' : 'Send to All Recipients'}
        </button>
      </form>
    </div>
  );
}

export default SendMails;