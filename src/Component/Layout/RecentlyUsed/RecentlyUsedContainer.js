import { connect } from 'react-redux';

import RecentlyUsed from './RecentlyUsed';
import { deleteRecentlyUsed } from '../../../Module/actions/recentlyUsed';
import { getRecentlyUsed } from '../../../Module/actions/recentlyUsed';
import { setCopy } from '../../../Module/actions/copy';

const mapStateToProps = state => {
    return { recentlyUsed: [...new Set(state.recentlyUsed)] };
};

const mapDispatchToProps = dispatch => {
    return {
        deleteRecentlyUsedEmoji: () => {
            localStorage.removeItem('emoji');
            dispatch(deleteRecentlyUsed());
        },
        getRecently: localEmojiArray => {
            dispatch(getRecentlyUsed(localEmojiArray));
        },
        setCopyEmoji: emoji => {
            dispatch(setCopy(emoji));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RecentlyUsed);
