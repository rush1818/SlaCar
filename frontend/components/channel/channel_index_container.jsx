import { connect } from 'react-redux';
import ChannelIndex from './channel_index.jsx';
import {requestPubChannels} from '../../actions/channel_actions.js';

const mapStateToProps = (state, ownProps) => {
  return({
    channels: state.channels
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchSubChannels: () => dispatch(requestPubChannels())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex);
