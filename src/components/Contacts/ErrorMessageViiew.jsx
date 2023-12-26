import React from 'react';

const ErrorMessageViiew = ({children}) => {
    return (
        <div className='error-message'>
            {children}
        </div>
    );
}

export default ErrorMessageViiew;
