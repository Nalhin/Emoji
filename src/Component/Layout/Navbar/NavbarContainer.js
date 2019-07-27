import Navbar from './Navbar';
import { connect } from 'react-redux';

import { setSkin } from '../../../Module/actions/skinColor';
import { setSearch } from '../../../Module/actions/search';

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
