import React from 'react';
import Header from '../Header';
import Search from '../Search';

function App() {
  const headerText = 'Hello World!';
  return (
    <div className="App">
      <Header text={headerText} />
      learn react
      <Search />
    </div>
  );
}

export default App;
