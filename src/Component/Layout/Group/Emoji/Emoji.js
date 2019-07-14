import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./Emoji.scss";
import { connect } from 'react-redux';

const Emoji = ({ emoji, name, skinChange, skin }) => {


    const showEmoji = skinChange ? emoji.slice(0, 2) + skin.unicode + emoji.slice(2) : emoji;

    return (
        <div className="emoji">
            <CopyToClipboard text={showEmoji}>
                <span>{showEmoji}</span>
            </CopyToClipboard>
            <span className="emoji-text">{name}</span>
        </div>
    );
};

const mapStateToProps = (state) => {

    return { skin: state.skin };
}

export default connect(mapStateToProps)(Emoji);
