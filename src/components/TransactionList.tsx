import React from 'react';
import { useTransactionState } from '../contexts/TransactionContext';
import styled from 'styled-components';
import TransactionItem from './TransactonItem';

export default function TransactionList() {
  const transactions = useTransactionState();

  return (
    <Container>
      {transactions.map((transaction) => (
        <TransactionItem {...transaction} key={transaction.id} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
