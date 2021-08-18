import React from 'react';
import { useHistory } from 'react-router-dom';
import { authService } from '../firebaseInstance';

export default function ProfilePage() {
  const user = JSON.parse(window.localStorage.getItem('user'));
  const history = useHistory();

  function onLogoutClick() {
    authService.signOut();
    history.push('/');
  }

  return (
    <div>
      <div>{user.name}</div>
      <div>{user.uid}</div>
      <div style={{ color: 'red' }} onClick={onLogoutClick}>
        logout
      </div>
    </div>
  );
}
