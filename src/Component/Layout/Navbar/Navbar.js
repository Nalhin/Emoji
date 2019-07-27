import React from 'react';
import PropTypes from 'prop-types';
import { debounce } from 'lodash';
import { FaSearch } from 'react-icons/fa';

import './Navbar.scss';
import { group } from '../../../Module/data/groupList';
import { skinColor } from '../../../Module/data/skinColor';
import DropDownMenu from './DropDownMenu/DropDownMenu';

const Navbar = ({ click, scroll, skin, setSkin, setSearch }) => {
    const debounceUpdate = debounce(value => {
        setSearch(value);
    }, 150);

    const searchUpdate = React.useCallback(
        event => {
            debounceUpdate(event.target.value);
        },
        [debounceUpdate]
    );

    return (
        <nav className="navbar">
            <div className="navbar__position">
                {group.map((group, index) => (
                    <div
                        onClick={click.bind(this, group)}
                        className={
                            scroll === group ? 'navbar__link navbar__link--active' : 'navbar__link'
                        }
                        key={index}
                    >
                        {group.split(' ')[0]}
                    </div>
                ))}
            </div>
            <div className="navbar__controls">
                <div className="navbar__input-container">
                    <input
                        className="navbar__input"
                        placeholder="Search..."
                        onChange={searchUpdate}
                    />
                    <FaSearch className="navbar__search-icon" />
                </div>
                <DropDownMenu skinColor={skinColor} setSkin={setSkin} skin={skin} />
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    click: PropTypes.func.isRequired,
    scroll: PropTypes.string,
    skin: PropTypes.shape({
        unicode: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
    }).isRequired,
    setSkin: PropTypes.func.isRequired,
    setSearch: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
    scroll: 'Smileys & Emotion',
};

export default Navbar;
