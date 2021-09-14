import React from 'react';

import Weather from './components/Weather/Weather';
import WeatherDropdowns from './components/WeatherDropdowns/WeatherDropdowns';

function App() {
  
  return (
    <>
      <WeatherDropdowns />
      <Weather />
    </>
  );
}

export default App;
