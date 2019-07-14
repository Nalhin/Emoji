import React from "react";
import './Navbar.scss';
import { group } from '../../../Module/GroupList';
import { skinColor } from '../../../Module/skinColor';
import { connect } from 'react-redux';
import { setSkin } from '../../../Module/actions/skinColor'

const Navbar = ({ click, scroll, setSkin }) => {

    return (
        <div className="navbar">
            {group.map((group, index) =>

                <div
                    onClick={click.bind(this, group)}
                    className={scroll === group ? 'navbar__link navbar__link--active' : 'navbar__link'}//'navbar__link'+}
                    key={index}
                >
                    {group}
                </div>
            )}
            <div>
                {
                    skinColor.map(skin =>

                        <div onClick={setSkin.bind(this, skin)} style={{ background: skin.color }} key={skin.name}>
                            {skin.name}
                        </div>
                    )
                }
            </div>
        </div >
    )
};

const mapStateToProps = (state) => {
    return { skin: state.skin };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setSkin: (skin) => {
            dispatch(setSkin(skin));
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navbar);