import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useData } from '../Hooks/useData';

function Home() {
  const [error, setError] = useState('');
  const history = useHistory();
  const { setData } = useData();

  function isValid(data) {
    return (
      data.title &&
      data.body &&
      data.title.trim().length > 0 &&
      data.body.trim().length > 0
    );
  }

  async function sendRequest(e) {
    e.preventDefault();
    const id = e.target[0].value * 1;

    if (!id) {
      setError('Please enter a numeric value');
      return;
    }

    const response = await fetch(process.env.REACT_APP_APIURL + id);
    const data = await response.json();

    if (!isValid(data)) {
      setError('Please check correctness of the input');
      return;
    }

    setData(data);

    history.push('/details');
  }

  return (
    <div className='w3-card'>
      <div className='w3-container w3-blue-grey'>
        <h2>Scalio Test</h2>
      </div>
      <form className='w3-container w3-padding' onSubmit={sendRequest}>
        <p>
          <input
            type='number'
            name='id'
            min='1'
            className='w3-input w3-border w3-light-grey'
          />
        </p>
        <button className='w3-btn w3-blue-grey'>Send</button>
      </form>
      {error && (
        <div className='w3-panel w3-pale-red'>
          <h3>Error</h3>
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}

export default Home;
