import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import StyledTreeItem from './components/layout/Tree';
import EnhancedTableHead from './components/layout/Table';

function App() {
  return (
    <div className="App">
      <Header />
      <StyledTreeItem />
      < EnhancedTableHead />
        Material UI
      <Footer />
    </div>
  );
}

export default App;
