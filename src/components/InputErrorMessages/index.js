import React from 'react';

export default function InputErrorMessages({ type, errorObj }) {
  if (type !== errorObj.type) {
    return null
  };

  return (
    <div className="has-error">
      {errorObj.message}
    </div>
  )
}
