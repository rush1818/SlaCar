import { connect } from 'react-redux';
import MessageIndex from './message_index.jsx';
import {requestAllMessages, createMessage, removeMessage} from '../../actions/message_actions.js';

const mapStateToProps = (state, ownProps) => {
  return({
    messages: state.messages,
    currentUserId: state.session.currentUser.id
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return ({
    removeMessage: (messageId) => dispatch(removeMessage(messageId)),
    fetchMessages: (date) => dispatch(requestAllMessages(date)),
    createMessage: (message) => dispatch(createMessage(message))
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageIndex);
