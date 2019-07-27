import Layout from './Layout';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return { search: state.search, copy: state.copy };
};

export default connect(mapStateToProps)(Layout);
