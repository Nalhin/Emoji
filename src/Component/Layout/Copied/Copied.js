import React from 'react';
import './Copied.scss';

const Copied = ({ copy, removeCopyEmoji }) => {
    React.useEffect(() => {
        const timer = setTimeout(() => {
            removeCopyEmoji();
        }, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, [copy, removeCopyEmoji]);

    return <div className="copied">Copied {copy}</div>;
};

export default Copied;
