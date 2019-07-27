import React from 'react';
import PropTypes from 'prop-types';

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

Copied.propTypes={
    removeCopyEmoji:PropTypes.func.isRequired,
    copy:PropTypes.string.isRequired
}

export default Copied;
