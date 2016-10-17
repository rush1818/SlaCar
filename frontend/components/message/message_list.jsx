import React from 'react';
import Spinner from 'react-spinkit';
import ReactEmoji from 'react-emoji';

class MessageList extends React.Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(id) {
    return (e) =>{
      e.preventDefault();
      this.props.removeMessage(id);
    };
  }

  render(){
    let that = this;
    if (!this.props.currentUser || !this.props.users){
      return (<Spinner spinnerName="rotating-plane" className="spinner-rotating-plane"/>);
    }
    let messageKeys = Object.keys(this.props.messages);
    let content = messageKeys.map(key=>{
      if (key === 'date' || key === "limit") {
        return;
      }
      let button=(<span></span>);
      let message = this.props.messages[key];
      let date = new Date(message.date);
      if (this.props.currentUser && this.props.currentUser.id === message.user_id){
        button = (
          <button className="msg-delete-button" onClick={this.handleDelete(this.props.messages[key].id)}><i className="material-icons">delete</i></button>
        );
      }
      if (message.url && message.url !== 'f'){
        debugger
        return (
          <li className="msg-list-item group" key={`${key} ${message.date}`}><span className="message-info group"><span className="msg-username">{this.props.users[message.user_id] ? this.props.users[message.user_id].name : this.props.currentUser.username}</span><span className='message-date'>{`${date.toDateString().slice(4)} ${date.toLocaleTimeString()}`}</span>{button}</span><img src={message.url} className='gif-image'/></li>
        )
      } else {
        return (
          <li className="msg-list-item group" key={`${key} ${message.date}`}><span className="message-info group"><span className="msg-username">{this.props.users[message.user_id] ? this.props.users[message.user_id].name : this.props.currentUser.username}</span><span className='message-date'>{`${date.toDateString().slice(4)} ${date.toLocaleTimeString()}`}</span>{button}</span>{ReactEmoji.emojify(message.body, {attributes: {className: "emoji-class"}} )}</li>
        );
      }
    });
    return (
      <section id="message-list-data" className="message-list-data">
      {content}
      </section>
    );
  }
}

export default MessageList;
