/*globals Pusher*/
import React from 'react';
import MessageList from './message_list.jsx';
import MessageFormContainer from './message_form_container.jsx';

class MessageIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    let that = this;
    var pusher = new Pusher(window.myPusherK, {
      encrypted: true
    });

    var channel = pusher.subscribe('messages');
      channel.bind('new_message', function(data) {
        that.props.fetchMessages();
    });
  }

  componentWillMount(){
    this.props.fetchMessages();
  }
  render() {
    return(
      <section className='message-index'>
        <h2>Message Index Component Goes Here</h2>
        <MessageList messages={this.props.messages} />
        <MessageFormContainer />
      </section>
    );
  }
}

export default MessageIndex;
