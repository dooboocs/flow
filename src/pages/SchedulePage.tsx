import React from 'react';
import TransactionList from '../components/TransactionList';

export default function SchedulePage() {
  return (
    <div>
      <div
        style={{
          fontSize: 32,
          fontWeight: 700,
          marginLeft: 20,
          marginTop: 30,
          marginBottom: 30,
          display: 'inline-block',
        }}
      >
        Schedule
      </div>
      <TransactionList />
    </div>
  );
}
