import React from 'react';
import './Layout.scss';
import Group from './Group/Group';
import Navbar from './Navbar/NavbarContainer';
import RecentlyUsed from './RecentlyUsed/RecentlyUsedContainer';
import Copied from './Copied/CopiedContainer';
import PropTypes from 'prop-types';
import { group } from '../../Module/data/groupList';
import { debounce } from 'lodash';
import { emojiArray } from '../../Module/data/emojiArray';
import { refs } from '../../Module/data/refs';

const Layout = ({ search, copy }) => {
    const [scroll, updateScroll] = React.useState('');

    const handleClick = group => {
        refs[group].current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    const scrollHandler = React.useCallback(() => {
        const findClosest = element => {
            return refs[element].current.offsetTop + refs[element].current.offsetHeight - 10 > window.pageYOffset;
        };
        updateScroll(group.find(findClosest));
    }, []);

    React.useEffect(() => {
        scrollHandler();
        window.addEventListener('scroll', debounce(scrollHandler, 200));
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        };
    }, [scrollHandler]);

  


    return (
        <div className="layout">
            <RecentlyUsed />
            <Navbar click={handleClick} scroll={scroll} />

            {emojiArray.map((row, index) => (
                <div ref={refs[group[index]]} key={group[index]}>
                    {row.find(emoji => emoji.name.includes(search)) ? (
                        <Group
                            key={group[index]}
                            group={group[index]}
                            row={row}
                            search={search}
                            className="layout__groups"
                        />
                    ) : null}
                </div>
            ))}
            {copy ? <Copied copy={copy} /> : null}
        </div>
    );
};

Layout.propTypes = {
    search: PropTypes.string.isRequired,
    copy: PropTypes.string,
};

Layout.defaultProps = {
    copy: '',
};

export default Layout;
