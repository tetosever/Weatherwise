import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (value) => {
    try {
      const response = await axios.post('https://a1c9c424-489f-4739-8ae8-9f1217b03076.mock.pstmn.io/feedback/', {
        feedback: value
      });
      setResponseMessage(response.data.message);
      setError('');
    } catch (error) {
      console.error('Error posting feedback:', error);
      setResponseMessage('');
      setError('Error posting feedback. Please try again.');
    }
  };

  return (
    <div>
      <h2>Feedback Form</h2>
      <button onClick={() => handleSubmit(1)}>Positive</button>
      <button onClick={() => handleSubmit(0)}>Negative</button>
      {responseMessage && <p>{responseMessage}</p>}
      {error && <p>{error}</p>}
    </div>
  );
}

export default FeedbackForm;

