import React from 'react';

const Alert = () => {
    return (
        <div
            className='container-fluid'
            style={{
                height: '75vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className='alert alert-danger' role='alert'>
                <h4 className='alert-heading'>Mail-ID Not Provided!</h4>
                <p>
                    Please enter User Mail Id in the navigation bar located at
                    the top right corner and click onto the check button next to
                    it to get the theatre and movie details.
                </p>
                <hr />
                <p className='mb-0'>Sample Mail ID : sample@gmail.com</p>
            </div>
        </div>
    );
};

export default Alert;
