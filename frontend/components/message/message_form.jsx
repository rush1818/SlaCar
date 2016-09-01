import React from 'react';

class MessageForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {body:"", channel_id: 1, errors:""};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleChange(field){
    return (e) =>{
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  handleEnter(e){
    if (e.key === "Enter"){
      this.handleSubmit(e);
    }
  }
  handleEmptyMsg(){
    const errorInterval = setInterval(()=>{

    })
    this.setState({errors: "Hey, enter some text!"});
  }

  handleSubmit(e){
    e.preventDefault();
    if (this.state.body.length > 0) {
      this.props.createMessage({message: {body: this.state.body, channel_id: this.state.channel_id}});
      this.setState({body:"", channel_id: 1});
      setTimeout(()=>{
        let messageList = document.getElementById("message-list-data");
        messageList.scrollTop = messageList.scrollHeight;
      },50);
    } else {
      // this.handleEmptyMsg();
    }
  }
  render(){
    return (<form className="message-form" onSubmit={this.handleSubmit}>
      <label htmlFor="msg-body"></label>
      <textarea id='msg-body' type='text' onChange={this.handleChange('body')} value={this.state.body} onKeyPress={this.handleEnter} placeholder={"New Message"}></textarea>
    </form>);
  }
}

export default MessageForm;
