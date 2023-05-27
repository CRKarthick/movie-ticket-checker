import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Theaters from './components/Theaters';
import NotFound from './components/NotFound';

function App() {
    const [mailId, setMailId] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(
                `https://zincubate.in/api/MovieTicketChecker?action=getAllDetails&user_mail_id=${mailId}`,
                {
                    method: 'POST',
                }
            );
            const json = await response.json();
            setData(json);
        }
        if (mailId) fetchData();
        // fetch(
        //     `https://zincubate.in/api/MovieTicketChecker?action=getAllDetails&user_mail_id=${mailId}`,
        //     {
        //         method: 'POST',
        //     }
        // )
        //     .then(response => response.json())
        //     .then(json => setData(json));
    }, [mailId]);

    return (
        <div className='App'>
            <Navbar setAppMailId={setMailId} />
            {!mailId && <Alert />}
            {/* {Object.keys(data).length > 0 &&
                data.theatre.map(th => {
                    return <div key={th.theatre_name}>{th.theatre_name}</div>;
                })} */}
            {Object.keys(data).length > 0 && (
                <Routes>
                    <Route path='/' element={<Theaters data={data} />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            )}
        </div>
    );
}

export default App;
