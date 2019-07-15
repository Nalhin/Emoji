import React, { useCallback } from 'react';
import './Navbar.scss';
import { group } from '../../../Module/GroupList';
import { skinColor } from '../../../Module/skinColor';
import { connect } from 'react-redux';
import { setSkin } from '../../../Module/actions/skinColor';
import { setSearch } from '../../../Module/actions/search';
import { debounce } from 'lodash';

const Navbar = ({ click, scroll, setSkin, skin, setSearch }) => {

    const debouncedUpdate = debounce(value => {
        setSearch(value);
    }, 300);

    const searchUpdate = useCallback(
        (event) => {
            debouncedUpdate(event.target.value)
        },
        [debouncedUpdate],
    )

    return (
        <div className="navbar">
            <div>
                <input onChange={searchUpdate} />
            </div>
            {group.map((group, index) => (
                <div
                    onClick={click.bind(this, group)}
                    className={
                        scroll === group
                            ? 'navbar__link navbar__link--active'
                            : 'navbar__link'
                    } //'navbar__link'+}
                    key={index}
                >
                    {group}
                </div>
            ))}
            <div className="navbar__skin-container">
                <h1 className="navbar__skin-header">Skin Colors</h1>
                {skinColor.map(element => (
                    <div
                        className={
                            element.name === skin.name
                                ? 'navbar__skin navbar__skin--active'
                                : 'navbar__skin'
                        }
                        onClick={setSkin.bind(this, element)}
                        style={{ background: element.color }}
                        key={element.name}
                    />
                ))}
            </div>
            <p>Emoji Data Version: 12.0</p>
        </div>
    );
};

const mapStateToProps = state => {
    return { skin: state.skin };
};

const mapDispatchToProps = dispatch => {
    return {
        setSkin: skin => {
            dispatch(setSkin(skin));
        },
        setSearch: value => {
            dispatch(setSearch(value));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar);
