import React, { Component } from 'react';
import ChatBox from '../ChatBox/ChatBox';
import { connect } from 'react-redux';
import { loadChats, setUser, addMsg } from '../../actions/chatAction';

class ChatPage extends Component {
    constructor(props) {
        super(props);
        this.onSubmitMsg = this.onSubmitMsg.bind(this);
    }

    componentWillMount(){
        this.props.setUser(120);
        this.props.loadChats();
    }

    shouldComponentUpdate () {
        this.render();
        return true;
    }
    componentWillUpdate() {
        console.log('sjbfkjasbjkfasbjkfb')
    }


    onSubmitMsg (e) {
        const msg = document.getElementById('chatInput_'+e.target.name).value;
        this.props.addMsg(e.target.name, msg, this.props.homeUser);
    }

    render () {
        console.log('render called');
        const chats = this.props.chats.map(item=>(
            <ChatBox key={item.id} chatId={item.id} homeUser={this.props.homeUser} msgs={item.messages} onSubmitMsg={this.onSubmitMsg}/>
        ));
        return (
            <div className="chatPage">
                {chats}
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {chats, homeUser} = state.chats;
    console.log(state.chats)
    return {
        chats,
        homeUser
    }
}

export default connect(mapStateToProps, {loadChats, setUser, addMsg})(ChatPage);