import React from 'react';
import './App.css';
import { TransactionProvider } from './contexts/TransactionContext';
import { authService } from './firebaseInstance';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login, Profile, Schedule } from './pages/index.';
import styled from 'styled-components';

export default function App() {
  const [init, setInit] = React.useState(false);

  React.useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        const userObj = { name: user.displayName, uid: user.uid };
        window.localStorage.setItem('user', JSON.stringify(userObj));
      } else {
        window.localStorage.removeItem('user');
      }
    });
    setInit(true);
  }, []);

  return (
    <TransactionProvider>
      <AppContainer>
        {init ? (
          <Router>
            <Switch>
              {window.localStorage.getItem('user') ? (
                <>
                  <Route exact path="/" component={Schedule} />
                  <Route path="/profile" component={Profile} />
                </>
              ) : (
                <Route exact path="/" component={Login} />
              )}
            </Switch>
          </Router>
        ) : (
          <div>Initializing...</div>
        )}
      </AppContainer>
    </TransactionProvider>
  );
}

const AppContainer = styled.div`
  background-color: rgba(247, 246, 243, 0.5);
  position: relative;
  min-height: 100vh;
`;
