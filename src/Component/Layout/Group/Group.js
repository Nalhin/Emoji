import React from "react";

import "./Group.scss";
import Emoji from "./Emoji/Emoji";
import emojiData from '../../../emoji.json';


const Group = ({ group }) => {

    return (
        <div className="group">
            <h1>{group}</h1>
            <div className="emoji-group">
                {emojiData.map((emoji, index) =>
                    emoji.group === group ? (
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

export default Group;
