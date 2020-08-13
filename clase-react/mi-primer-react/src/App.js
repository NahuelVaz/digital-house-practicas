import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar'
import Topbar from './components/Topbar'
import PageContent from './components/PageContent';

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Topbar />
          <PageContent />
        </div>
      </div>
    </div>
  );
}

export default App;
