import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';

import './Layout.scss';
import Group from './Group/Group';
import Navbar from './Navbar/NavbarContainer';
import RecentlyUsed from './RecentlyUsed/RecentlyUsedContainer';
import Copied from './Copied/CopiedContainer';
import version from '../../Module/data/version';
import { group } from '../../Module/data/groupList';
import { emojiArray } from '../../Module/data/emojiArray';
import { refs } from '../../Module/data/refs';



const Layout = ({ search, copy }) => {
    const [scroll, updateScroll] = React.useState('');
    const offset = 96;
    const url = 'https://unicode.org/Public/emoji/12.0/emoji-test.txt';

    const handleClick = group => {
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = refs[group].current.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    };

    const scrollHandler = React.useCallback(() => {
        const findClosest = element => {
            return (
                refs[element].current.offsetTop + refs[element].current.offsetHeight - 10 - offset >
                window.pageYOffset
            );
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
            <Navbar click={handleClick} scroll={scroll} />
            <RecentlyUsed />

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
            <footer className="layout__footer"><a href={url} target="_blank" rel="noopener noreferrer" >Emoji Data Version: {version}</a></footer>
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
