import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './DropDownMenu.scss';

const DropDownMenu = ({ skinColor, setSkin, skin }) => {
    const [isDropDownOpen, setIsDropDownOpen] = React.useState(false);

    const dropDownOnClick = React.useCallback(() => {
        setIsDropDownOpen(!isDropDownOpen);
    }, [isDropDownOpen]);

    const dropDownSelectClass = classNames({
        'skin-drop-down__select': true,
        'skin-drop-down__select--hide': !isDropDownOpen,
    });
    return (
        <div className="skin-drop-down">
            <div className="skin-drop-down__header" onClick={dropDownOnClick}>
                <div className="skin-drop-down__skin" style={{ background: skin.color }} />
            </div>

            <div className={dropDownSelectClass}>
                {skinColor.map(element => (
                    <div
                        className={'skin-drop-down__skin'}
                        onClick={setSkin.bind(this, element)}
                        style={{ background: element.color }}
                        key={element.name}
                    />
                ))}
            </div>
        </div>
    );
};

DropDownMenu.propTypes={
    skinColor: PropTypes.arrayOf(PropTypes.shape({
        unicode: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
    })).isRequired,
    skin: PropTypes.shape({
        unicode: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired,
    }).isRequired,
    setSkin: PropTypes.func.isRequired,
}

export default DropDownMenu;
