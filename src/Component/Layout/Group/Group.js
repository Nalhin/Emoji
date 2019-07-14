import React from "react";
import { connect } from 'react-redux';
import "./Group.scss";
import Emoji from "./Emoji/Emoji";
// import emojiData from '../../../emoji.json';


const Group = ({ group, search, row }) => {

    return (
        <div className="group">
            <h1>{group}</h1>
            <div className="emoji-group">
                {row.map((emoji, index) =>
                    emoji.name.includes(search) ? (
                        <Emoji

                            emoji={emoji.emoji}
                            skinChange={emoji.skin}

                            name={emoji.name}
                            key={index}
                        />
                    ) : null
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {

    return { search: state.search };
}

export default connect(mapStateToProps)(Group);


