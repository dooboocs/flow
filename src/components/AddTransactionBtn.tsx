import React from 'react';

export default function AddTransactionBtn() {
  return (
    <div
      style={{
        fontWeight: 700,
        fontSize: 18,
        position: 'absolute',
        bottom: 60,
        left: 30,
        color: '#40c057',
        cursor: 'pointer',
      }}
    >
      New Transaction
    </div>
  );
}
