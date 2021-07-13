import React from 'react';
import './App.css';
import LanguageProvider from './contexts/LanguageContext';
import {ThemeProvider} from './contexts/ThemeContext';
import Form from './Form';
import Navbar from './Navbar';
import PageContent from './PageContent';

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        {/* All the Components inside ThemeProvider context will have access to contexts */}
        <LanguageProvider>
          <PageContent>
            <Navbar />
            <Form />
          </PageContent>
        </LanguageProvider>
      </ThemeProvider>
     
    </div>
  );
}

export default App;
