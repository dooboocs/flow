import React from 'react';
import './App.css';
import { TransactionProvider } from './contexts/TransactionContext';
import { authService } from './firebaseInstance';
import styled from 'styled-components';
import AppRouter from './routes/AppRouter';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isInitialized, setIsInitialized] = React.useState(false);

  console.log(process.env.NODE_ENV);

  function _initService() {
    authService.onAuthStateChanged((user) => {
      if (user) {
        const userObj = { name: user.displayName, uid: user.uid };
        window.localStorage.setItem('user', JSON.stringify(userObj));
      } else {
        window.localStorage.removeItem('user');
      }
    });
    setIsInitialized(true);
  }

  React.useEffect(() => {
    _initService();
  }, []);

  return (
    <TransactionProvider>
      <AppContainer>
        {isInitialized ? <AppRouter /> : <LoadingScreen />}
      </AppContainer>
    </TransactionProvider>
  );
}

const AppContainer = styled.div`
  background-color: rgba(247, 246, 243, 0.5);
  position: relative;
  min-height: 100vh;
`;
