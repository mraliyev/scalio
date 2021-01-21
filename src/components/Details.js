import React from 'react';
import { useHistory } from 'react-router-dom';
import { useData } from '../Hooks/useData';

function Details() {
  const history = useHistory();
  const { data } = useData();

  function handleClick() {
    history.push('/');
  }

  return (
    <div className='w3-card'>
      <div className='w3-container w3-padding-16 w3-light-grey'>
        <button
          type='button'
          className='w3-button w3-red'
          onClick={handleClick}
        >
          Back
        </button>
      </div>
      <div className='w3-padding'>{data.title}</div>
      <div className='w3-padding'>{data.body}</div>
    </div>
  );
}

export default Details;
