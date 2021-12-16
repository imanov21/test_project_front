import React from 'react';

interface IProps {
    message: string;
}

const ErrorMessage: React.FC<IProps> = ({ message }) => (
    <>{message ? <p className="m-10 text-red-500">{message}</p> : null}</>
);

export default ErrorMessage;
