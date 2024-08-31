import React from 'react';
import './Result.css';

export const Result = ({ result }) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: result }} className='resultdiv' />
  );
}
