import { connect } from 'react-redux';
import ChannelIndex from './channel_index.jsx';
import {requestPubChannels, requestPrivateChannels} from '../../actions/channel_actions.js';

const mapStateToProps = (state, ownProps) => {
  return({
    channels: state.channels,
    privateChannels: state.privateChannels
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    fetchSubChannels: () => dispatch(requestPubChannels()),
    fetchPrivateChannels: () => dispatch(requestPrivateChannels())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex);
