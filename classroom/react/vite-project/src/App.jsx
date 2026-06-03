import React from 'react';
import InfoCard from './components/InfoCard/InfoCard';

function App() {
  return (
    <div style={{
      backgroundColor: '#0a0a0a',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    }}>
      <InfoCard />
    </div>
  );
}

export default App;