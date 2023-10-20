import React from 'react';
import './message.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
export default function Notification() {

    const profilePic = 'https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600';
    return (
        <div className='messages'>
            <div className='container-fleid'>
                <div className='headerContainer'>
                    <div className='HeaderTitle'>
                        Messages
                    </div>
                </div>
                <div className='headerContainer border'>
                    <div class="button-container" >

                        <button class="active" onclick="openChat('primary')">Primary chats</button>
                        <button class="chat-button" onclick="openChat('group')">Group chats</button>

                    </div>

                </div>
            </div>
            <div className='chat-list-container'>
                <div className='search-Bar'>
                <input type="text" name="q" placeholder="Search"/>
      
                </div>
                <div className='chat-list'>
                    <div className='list-title'>

                    </div>
                    <div className='chat-lable'>

                    </div>
                    <div className='middle-line'>

                    </div>
                </div>
            </div>
        </div >
    )
}