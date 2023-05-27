import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';

function App() {
    const [mailId, setMailId] = useState('');
    return (
        <div className='App'>
            <Navbar setAppMailId={setMailId} />
            {!mailId && <Alert />}
        </div>
    );
}

export default App;
