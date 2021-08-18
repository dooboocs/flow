import React from 'react';
import styled from 'styled-components';
import {
  ITransaction,
  useTransactionState,
} from '../contexts/TransactionContext';
import CurrencyFormat from 'react-currency-format';
import moment from 'moment';

export default function TransactionItem(transaction: ITransaction) {
  const { title, amount, date } = transaction;
  const transactions = useTransactionState();

  function calcBalance(): number {
    let balance: number = 0;

    transactions.forEach((t) => {
      if (t.date <= date) balance += t.amount;
    });

    return balance;
  }

  return (
    <Container>
      <Row>
        <Text contentEditable={true} suppressContentEditableWarning={true}>
          {title}
        </Text>
        <CurrencyFormat
          value={amount}
          thousandSeparator={true}
          renderText={(value) => <Text>{value}</Text>}
          displayType={'text'}
          suffix=" KRW"
        />
      </Row>
      <Row>
        <SubText>
          {date ? moment(date).format('YYYY.MM.DD') : 'Undefined'}
        </SubText>
        <CurrencyFormat
          value={calcBalance()}
          thousandSeparator={true}
          renderText={(value) => <SubText>{value}</SubText>}
          displayType={'text'}
          suffix=" KRW"
        />
      </Row>
    </Container>
  );
}

const Container = styled.div`
  display: inline-block;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  padding: 20px;
  box-sizing: border-box;
`;

const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;

  &:focus {
    outline: none;
  }
`;

const SubText = styled.div`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`;
