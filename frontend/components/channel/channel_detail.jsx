import React from 'react';
import MessageIndexContainer from '../message/message_index_container.jsx';

class ChannelDetail extends React.Component {
  constructor(props){
    super(props);
    this.channelId = this.props.location.search.slice(1);
    this.channelName = this.props.params.channel_name;
    this.state = {channelId:this.props.location.search.slice(1), channelName: this.props.params.channel_name  };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.unsubscribeChannel(this.state.channelId);
  }

  componentWillReceiveProps(newProps){
    this.setState({channelId: newProps.location.search.slice(1), channelName: newProps.params.channel_name});
  }

  render() {
    return(
      <section className='message-index'>
        <section className='message-index-info group'>
          <h3 className="channel-title">#{this.state.channelName}</h3>
          <button onClick={this.handleClick}>Remove Channel</button>
        </section>
        <MessageIndexContainer channelId={this.state.channelId} channelName={this.state.channelName} />
      </section>
    );
  }
}

export default ChannelDetail;
