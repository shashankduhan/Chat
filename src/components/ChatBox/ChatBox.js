import React, { Component } from 'react';

class ChatBox extends Component {

    render () {
        const msgs = this.props.msgs.map(msg => {
            const msgcls = msg.by === this.props.homeUser ? 'right' : 'left';
            return (
                <div key={msg.id} className={"msgbox " + msgcls}>
                    <span className="msg">{msg.msg}</span>
                </div>
            )
        });
        return (
            <div className="chatBox">
                <div className="chatHeader"></div>
                <div className="chatPad">{msgs}</div>
                <div className="chatInput">
                    <input type="text" name="chatInput" id={"chatInput_"+this.props.chatId}/>
                    <button type="submit" name={this.props.chatId} onClick={this.props.onSubmitMsg}>Send</button>
                </div>
            </div>
        )
    }
}

export default ChatBox;