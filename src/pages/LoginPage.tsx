import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { authService, firebaseInstance } from '../firebaseInstance';

export default function LoginPage() {
  const history = useHistory();
  async function onSocialLogin(e) {
    const { name } = e.target;
    let provider;
    if (name === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === 'github') {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }

    try {
      await authService.signInWithPopup(provider);
      history.push('/');
    } catch (e) {
      window.alert(e);
    }
  }

  return (
    <div>
      <Title>Login</Title>
      <Container>
        <SocialButton role="button" name="google" onClick={onSocialLogin}>
          Continue with Google
        </SocialButton>
        <SocialButton role="button" name="github" onClick={onSocialLogin}>
          Continue with Github
        </SocialButton>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  display: inline-block;
  font-size: 32px;
  font-weight: 700;
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom: 100px;
`;

const SocialButton = styled.button`
  width: 200px;
  height: 50px;
  margin-bottom: 20px;
`;
