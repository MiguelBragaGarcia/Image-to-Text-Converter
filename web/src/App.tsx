import React from 'react';
import GlobalStyle from './styles/global';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Dashboard />
    </>
  );
};

export default App;
