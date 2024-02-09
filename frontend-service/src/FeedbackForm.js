import React, { useState } from 'react';
import axios from 'axios';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (value) => {
    try {
      const response = await axios.post('https://dccd540d-90df-4a0a-9da5-297711ad9136.mock.pstmn.io/feedback/', {
        rating: value
      });
      setResponse(response.data);
      setError(null);
      console.log('Feedback submitted:', response.data);
      // Handle successful submission
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setResponse(null);
      setError('Error submitting feedback. Please try again.');
      // Handle error
    }
  };

  return (
    <div>
      <h2>Provide Feedback</h2>
      <form>
        <div>
          <button type="button" onClick={() => handleSubmit(1)}>Positive</button>
          <button type="button" onClick={() => handleSubmit(0)}>Negative</button>
        </div>
      </form>
      {error && <p>{error}</p>}
      {response && (
        <div>
          <h3>Response Received</h3>
          <p>{response.message}</p>
        </div>
      )}
    </div>
  );
}

export default FeedbackForm;
