import Emoji from './Emoji';
import { connect } from 'react-redux';
import { addRecentlyUsed } from '../../../../Module/actions/recentlyUsed';
import { setCopy } from '../../../../Module/actions/copy';

const mapStateToProps = state => {
    return { skin: state.skin };
};

const mapDispatchToProps = dispatch => {
    return {
        addRecentlyUsedEmoji: recently => {
            dispatch(addRecentlyUsed(recently));
        },
        setCopyEmoji: emoji => {
            dispatch(setCopy(emoji));
        },

    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Emoji);
