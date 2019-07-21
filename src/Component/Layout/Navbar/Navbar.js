import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.scss';
import { group } from '../../../Module/data/groupList';
import { skinColor } from '../../../Module/data/skinColor';
import { debounce } from 'lodash';

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
        <div className="navbar">
            <div className="navbar__input">
                <input onChange={searchUpdate} />
            </div>
            {group.map((group, index) => (
                <div
                    onClick={click.bind(this, group)}
                    className={scroll === group ? 'navbar__link navbar__link--active' : 'navbar__link'}
                    key={index}
                >
                    {group}
                </div>
            ))}
            <div className="navbar__skin-container">
                <h1 className="navbar__skin-header">Skin Colors</h1>
                {skinColor.map(element => (
                    <div
                        className={element.name === skin.name ? 'navbar__skin navbar__skin--active' : 'navbar__skin'}
                        onClick={setSkin.bind(this, element)}
                        style={{ background: element.color }}
                        key={element.name}
                    />
                ))}
            </div>
            <p className="navbar__footer">Emoji Data Version: 12.0</p>
        </div>
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
