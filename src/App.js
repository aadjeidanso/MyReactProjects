import React from 'react';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects'; 

function App() {
    return (
        <div className="App">
            <Header />
            <Projects />
            {/* Other components will go here */}
        </div>
    );
}

export default App;
