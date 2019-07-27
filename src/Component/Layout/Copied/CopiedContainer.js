import Copied from './Copied';
import { connect } from 'react-redux';

import { removeCopy } from '../../../Module/actions/copy';

const mapDispatchToProps = dispatch => {
    return {
        removeCopyEmoji: () => {
            dispatch(removeCopy());
        },
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Copied);
