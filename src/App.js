import { Routes, Route, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import UserPage from './pages/UserPage';
import EntryPage from './pages/EntryPage';
import { useState } from 'react';

export default function App() {
  const [user, setUser] = useState('');
  const [userColor, setUserColor] = useState('');
  const navigate = useNavigate();
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<UserPage onCreateAuthor={createAuthor} />} />
        <Route
          path="/entries"
          element={<EntryPage user={user} userColor={userColor} />}
        />
      </Routes>
    </AppContainer>
  );

  function createAuthor(author, color) {
    setUser(author);
    setUserColor(color);
    navigate('/entries');
  }
}

const AppContainer = styled.div`
  background-image: linear-gradient(to top, #007adf 0%, #00ecbc 100%);
  @media (min-width: 1200px) {
    height: 100vh;
  }
`;
